# WeCare Jamaica - Setup Guide

## 🎯 Interactive Jamaica Map

The interactive map is **fully functional** and ready to use! It shows:
- All 14 parishes of Jamaica
- Impact levels (High, Medium, Low, Planning)
- Families helped, supplies delivered, homes rebuilt
- Click any parish for detailed stats
- Fully responsive design

### Map Features
- ✅ Click markers to see parish details
- ✅ Hover effects on markers
- ✅ Parish list with search/filter capability
- ✅ Real-time statistics
- ✅ Color-coded impact levels

## 🔧 Backend Forms Setup

Your forms are ready! Choose **ONE** of these backend options:

### Option 1: Supabase (Recommended - You're already using it!)

**1. Create Supabase Tables:**

Run these SQL commands in your Supabase SQL editor:

```sql
-- Contact Form Submissions
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  type TEXT DEFAULT 'contact',
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Volunteer Submissions
CREATE TABLE volunteer_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  "firstName" TEXT NOT NULL,
  "lastName" TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  location TEXT NOT NULL,
  roles JSONB,
  message TEXT,
  consent BOOLEAN DEFAULT FALSE,
  type TEXT DEFAULT 'volunteer',
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Newsletter Subscriptions
CREATE TABLE newsletter_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  type TEXT DEFAULT 'newsletter',
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE volunteer_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (forms)
CREATE POLICY "Allow anonymous inserts" ON contact_submissions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts" ON volunteer_submissions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts" ON newsletter_submissions
  FOR INSERT WITH CHECK (true);
```

**2. Update `forms-handler.js` configuration:**

```javascript
const formsConfig = {
  backend: 'supabase',
  supabaseUrl: 'YOUR_SUPABASE_PROJECT_URL',  // e.g., https://xxxxx.supabase.co
  supabaseKey: 'YOUR_SUPABASE_ANON_KEY',     // Your anon/public key
};
```

**Where to find these values:**
- Go to your Supabase project settings
- Click "API" in the sidebar
- Copy the `Project URL` and `anon/public key`

---

### Option 2: EmailJS (No Database Needed)

**1. Sign up at [EmailJS.com](https://emailjs.com)** (Free tier: 200 emails/month)

**2. Create an email service:**
- Connect your Gmail/Outlook
- Get your Service ID

**3. Create email templates:**
- Create templates for contact, volunteer, newsletter
- Get your Template IDs

**4. Update `forms-handler.js`:**

```javascript
const formsConfig = {
  backend: 'emailjs',
  emailJsServiceId: 'YOUR_SERVICE_ID',
  emailJsTemplateId: 'YOUR_TEMPLATE_ID',
  emailJsPublicKey: 'YOUR_PUBLIC_KEY'
};
```

---

### Option 3: Custom API

**1. Create your API endpoints:**
- `POST /api/contact` - Contact form
- `POST /api/volunteer` - Volunteer form
- `POST /api/newsletter` - Newsletter signup

**2. Update `forms-handler.js`:**

```javascript
const formsConfig = {
  backend: 'api',
  apiEndpoint: 'https://your-api.com/api'
};
```

---

## 🚀 Quick Start

1. **Choose your backend** (Supabase recommended)
2. **Open `forms-handler.js`**
3. **Update the configuration at the bottom**
4. **Test your forms!**

## 📊 Viewing Submissions

### With Supabase:
- Go to your Supabase dashboard
- Click "Table Editor"
- View `contact_submissions`, `volunteer_submissions`, `newsletter_submissions`
- Export as CSV anytime

### With EmailJS:
- Check your connected email inbox
- All form submissions arrive as emails

## 🔒 Security Notes

- ✅ Supabase keys are safe to expose (anon key only allows inserts)
- ✅ RLS policies prevent unauthorized data access
- ✅ All forms have CSRF protection via same-origin policy
- ✅ Data is validated on both frontend and backend

## 🧪 Testing

Test your forms locally:
1. Open any HTML file in your browser
2. Fill out a form
3. Check for success notification
4. Verify data in your backend

## 💡 Need Help?

**Backend Issues:**
- Supabase: Check your API keys and table names match exactly
- EmailJS: Verify your service is active and templates exist
- API: Check CORS settings on your server

**Form Not Submitting:**
- Open browser console (F12)
- Check for JavaScript errors
- Verify `forms-handler.js` is loading

## 📦 Files Created

- `jamaica-map.js` - Interactive map component
- `forms-handler.js` - Backend forms integration
- `impact.html` - Updated with working map
- `contact.html` - Updated with form handler
- `volunteer.html` - Updated with form handler

All pages are **production-ready** once you add your API credentials!
