// WeCare Jamaica Forms Handler
// Supports multiple backend options: Supabase, Custom API, Email services

class FormsHandler {
  constructor(config = {}) {
    this.config = {
      backend: config.backend || 'supabase', // 'supabase', 'api', 'emailjs'
      supabaseUrl: config.supabaseUrl || '',
      supabaseKey: config.supabaseKey || '',
      apiEndpoint: config.apiEndpoint || '',
      emailJsServiceId: config.emailJsServiceId || '',
      emailJsTemplateId: config.emailJsTemplateId || '',
      emailJsPublicKey: config.emailJsPublicKey || ''
    };

    this.init();
  }

  init() {
    this.setupContactForm();
    this.setupVolunteerForm();
    this.setupNewsletterForm();
  }

  // Contact Form Handler
  setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalText = submitButton.innerHTML;

      // Show loading state
      submitButton.disabled = true;
      submitButton.innerHTML = '<i data-lucide="loader" class="w-5 h-5 animate-spin inline-block mr-2"></i>Sending...';
      lucide.createIcons();

      const formData = {
        name: contactForm.querySelector('[name="name"]').value,
        email: contactForm.querySelector('[name="email"]').value,
        subject: contactForm.querySelector('[name="subject"]').value,
        message: contactForm.querySelector('[name="message"]').value,
        type: 'contact',
        timestamp: new Date().toISOString()
      };

      try {
        const result = await this.submitForm('contact', formData);

        if (result.success) {
          this.showNotification('success', 'Message sent! We\'ll get back to you within 24 hours.');
          contactForm.reset();
        } else {
          throw new Error(result.error || 'Failed to send message');
        }
      } catch (error) {
        console.error('Contact form error:', error);
        this.showNotification('error', 'Failed to send message. Please try again or email us directly at info@wecarejamaica.org');
      } finally {
        submitButton.disabled = false;
        submitButton.innerHTML = originalText;
      }
    });
  }

  // Volunteer Form Handler
  setupVolunteerForm() {
    const volunteerForm = document.getElementById('volunteer-form');
    if (!volunteerForm) return;

    volunteerForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitButton = volunteerForm.querySelector('button[type="submit"]');
      const originalText = submitButton.innerHTML;

      submitButton.disabled = true;
      submitButton.innerHTML = '<i data-lucide="loader" class="w-5 h-5 animate-spin inline-block mr-2"></i>Submitting...';
      lucide.createIcons();

      // Collect selected roles
      const roles = Array.from(volunteerForm.querySelectorAll('input[type="checkbox"]:checked'))
        .map(cb => cb.parentElement.textContent.trim());

      const formData = {
        firstName: volunteerForm.querySelector('[name="firstName"]').value,
        lastName: volunteerForm.querySelector('[name="lastName"]').value,
        email: volunteerForm.querySelector('[name="email"]').value,
        phone: volunteerForm.querySelector('[name="phone"]').value,
        location: volunteerForm.querySelector('[name="location"]').value,
        roles: roles,
        message: volunteerForm.querySelector('[name="message"]').value,
        consent: volunteerForm.querySelector('[name="consent"]').checked,
        type: 'volunteer',
        timestamp: new Date().toISOString()
      };

      try {
        const result = await this.submitForm('volunteer', formData);

        if (result.success) {
          this.showNotification('success', 'Application received! Check your email for next steps.');
          volunteerForm.reset();

          // Scroll to top
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          throw new Error(result.error || 'Failed to submit application');
        }
      } catch (error) {
        console.error('Volunteer form error:', error);
        this.showNotification('error', 'Failed to submit application. Please try again or contact us directly.');
      } finally {
        submitButton.disabled = false;
        submitButton.innerHTML = originalText;
      }
    });
  }

  // Newsletter Form Handler
  setupNewsletterForm() {
    const newsletterForms = document.querySelectorAll('.newsletter-form');

    newsletterForms.forEach(form => {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;

        submitButton.disabled = true;
        submitButton.innerHTML = 'Subscribing...';

        const formData = {
          email: form.querySelector('[type="email"]').value,
          type: 'newsletter',
          timestamp: new Date().toISOString()
        };

        try {
          const result = await this.submitForm('newsletter', formData);

          if (result.success) {
            this.showNotification('success', 'Subscribed! Check your email to confirm.');
            form.reset();
          } else {
            throw new Error(result.error || 'Failed to subscribe');
          }
        } catch (error) {
          console.error('Newsletter form error:', error);
          this.showNotification('error', 'Failed to subscribe. Please try again.');
        } finally {
          submitButton.disabled = false;
          submitButton.innerHTML = originalText;
        }
      });
    });
  }

  // Submit form to appropriate backend
  async submitForm(formType, data) {
    switch (this.config.backend) {
      case 'supabase':
        return await this.submitToSupabase(formType, data);
      case 'api':
        return await this.submitToAPI(formType, data);
      case 'emailjs':
        return await this.submitToEmailJS(formType, data);
      default:
        console.warn('No backend configured. Form data:', data);
        return { success: true }; // For testing without backend
    }
  }

  // Supabase submission
  async submitToSupabase(formType, data) {
    if (!this.config.supabaseUrl || !this.config.supabaseKey) {
      throw new Error('Supabase credentials not configured');
    }

    const tableName = `${formType}_submissions`;

    const response = await fetch(`${this.config.supabaseUrl}/rest/v1/${tableName}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': this.config.supabaseKey,
        'Authorization': `Bearer ${this.config.supabaseKey}`,
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Supabase submission failed');
    }

    return { success: true, data: await response.json() };
  }

  // Custom API submission
  async submitToAPI(formType, data) {
    if (!this.config.apiEndpoint) {
      throw new Error('API endpoint not configured');
    }

    const response = await fetch(`${this.config.apiEndpoint}/${formType}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'API submission failed');
    }

    return { success: true, data: await response.json() };
  }

  // EmailJS submission
  async submitToEmailJS(formType, data) {
    if (!this.config.emailJsServiceId || !this.config.emailJsTemplateId || !this.config.emailJsPublicKey) {
      throw new Error('EmailJS credentials not configured');
    }

    // Load EmailJS library if not already loaded
    if (typeof emailjs === 'undefined') {
      await this.loadEmailJS();
    }

    try {
      await emailjs.send(
        this.config.emailJsServiceId,
        this.config.emailJsTemplateId,
        {
          form_type: formType,
          ...data
        },
        this.config.emailJsPublicKey
      );

      return { success: true };
    } catch (error) {
      throw new Error(error.text || 'EmailJS submission failed');
    }
  }

  // Load EmailJS library dynamically
  loadEmailJS() {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
      script.onload = () => {
        emailjs.init(this.config.emailJsPublicKey);
        resolve();
      };
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  // Show notification to user
  showNotification(type, message) {
    // Remove any existing notifications
    const existing = document.getElementById('form-notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.id = 'form-notification';
    notification.className = `fixed top-24 right-4 z-50 max-w-md p-4 rounded-lg shadow-lg border-2 transition-all transform ${
      type === 'success'
        ? 'bg-green-50 border-green-500 text-green-900'
        : 'bg-red-50 border-red-500 text-red-900'
    }`;

    notification.innerHTML = `
      <div class="flex items-start gap-3">
        <div class="flex-shrink-0">
          ${type === 'success'
            ? '<i data-lucide="check-circle" class="w-6 h-6 text-green-600"></i>'
            : '<i data-lucide="alert-circle" class="w-6 h-6 text-red-600"></i>'
          }
        </div>
        <div class="flex-1">
          <p class="font-medium text-sm">${message}</p>
        </div>
        <button onclick="this.parentElement.parentElement.remove()" class="flex-shrink-0">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>
    `;

    document.body.appendChild(notification);
    lucide.createIcons();

    // Auto-remove after 5 seconds
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => notification.remove(), 300);
    }, 5000);
  }
}

// Initialize forms handler when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Configuration - UPDATE THESE VALUES
  const formsConfig = {
    backend: 'supabase', // Change to 'api', 'emailjs', or 'supabase'

    // Supabase config (if using Supabase)
    supabaseUrl: 'YOUR_SUPABASE_URL',
    supabaseKey: 'YOUR_SUPABASE_ANON_KEY',

    // Custom API config (if using custom API)
    apiEndpoint: 'YOUR_API_ENDPOINT',

    // EmailJS config (if using EmailJS)
    emailJsServiceId: 'YOUR_SERVICE_ID',
    emailJsTemplateId: 'YOUR_TEMPLATE_ID',
    emailJsPublicKey: 'YOUR_PUBLIC_KEY'
  };

  // Initialize forms handler
  window.formsHandler = new FormsHandler(formsConfig);
});
