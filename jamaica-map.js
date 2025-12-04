// Interactive Jamaica Map Component
// Shows parishes, impact areas, and aid distribution

const jamaicaMapData = {
  parishes: [
    {
      id: 'kingston',
      name: 'Kingston',
      impactLevel: 'high',
      familiesHelped: 450,
      suppliesDelivered: 1200,
      homesRebuilt: 45,
      status: 'active',
      coordinates: { x: 620, y: 280 }
    },
    {
      id: 'st-andrew',
      name: 'St. Andrew',
      impactLevel: 'high',
      familiesHelped: 380,
      suppliesDelivered: 950,
      homesRebuilt: 38,
      status: 'active',
      coordinates: { x: 580, y: 240 }
    },
    {
      id: 'st-thomas',
      name: 'St. Thomas',
      impactLevel: 'medium',
      familiesHelped: 220,
      suppliesDelivered: 580,
      homesRebuilt: 22,
      status: 'active',
      coordinates: { x: 720, y: 260 }
    },
    {
      id: 'portland',
      name: 'Portland',
      impactLevel: 'high',
      familiesHelped: 340,
      suppliesDelivered: 890,
      homesRebuilt: 34,
      status: 'active',
      coordinates: { x: 680, y: 180 }
    },
    {
      id: 'st-mary',
      name: 'St. Mary',
      impactLevel: 'medium',
      familiesHelped: 280,
      suppliesDelivered: 720,
      homesRebuilt: 28,
      status: 'active',
      coordinates: { x: 580, y: 160 }
    },
    {
      id: 'st-ann',
      name: 'St. Ann',
      impactLevel: 'medium',
      familiesHelped: 310,
      suppliesDelivered: 800,
      homesRebuilt: 31,
      status: 'active',
      coordinates: { x: 460, y: 180 }
    },
    {
      id: 'trelawny',
      name: 'Trelawny',
      impactLevel: 'low',
      familiesHelped: 150,
      suppliesDelivered: 390,
      homesRebuilt: 15,
      status: 'planning',
      coordinates: { x: 380, y: 200 }
    },
    {
      id: 'st-james',
      name: 'St. James',
      impactLevel: 'medium',
      familiesHelped: 290,
      suppliesDelivered: 750,
      homesRebuilt: 29,
      status: 'active',
      coordinates: { x: 300, y: 220 }
    },
    {
      id: 'hanover',
      name: 'Hanover',
      impactLevel: 'low',
      familiesHelped: 120,
      suppliesDelivered: 310,
      homesRebuilt: 12,
      status: 'planning',
      coordinates: { x: 220, y: 200 }
    },
    {
      id: 'westmoreland',
      name: 'Westmoreland',
      impactLevel: 'high',
      familiesHelped: 410,
      suppliesDelivered: 1050,
      homesRebuilt: 41,
      status: 'active',
      coordinates: { x: 200, y: 260 }
    },
    {
      id: 'st-elizabeth',
      name: 'St. Elizabeth',
      impactLevel: 'medium',
      familiesHelped: 260,
      suppliesDelivered: 670,
      homesRebuilt: 26,
      status: 'active',
      coordinates: { x: 280, y: 300 }
    },
    {
      id: 'manchester',
      name: 'Manchester',
      impactLevel: 'medium',
      familiesHelped: 240,
      suppliesDelivered: 620,
      homesRebuilt: 24,
      status: 'active',
      coordinates: { x: 400, y: 280 }
    },
    {
      id: 'clarendon',
      name: 'Clarendon',
      impactLevel: 'high',
      familiesHelped: 390,
      suppliesDelivered: 1000,
      homesRebuilt: 39,
      status: 'active',
      coordinates: { x: 500, y: 260 }
    },
    {
      id: 'st-catherine',
      name: 'St. Catherine',
      impactLevel: 'high',
      familiesHelped: 420,
      suppliesDelivered: 1080,
      homesRebuilt: 42,
      status: 'active',
      coordinates: { x: 560, y: 280 }
    }
  ]
};

class JamaicaMap {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.selectedParish = null;
    this.init();
  }

  init() {
    this.render();
    this.attachEventListeners();
  }

  getImpactColor(level) {
    const colors = {
      high: '#15803d',      // green-700
      medium: '#facc15',    // yellow-400
      low: '#93c5fd',       // blue-300
      planning: '#e5e7eb'   // gray-200
    };
    return colors[level] || colors.planning;
  }

  getStatusBadge(status) {
    const badges = {
      active: '<span class="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full"><span class="w-1.5 h-1.5 bg-green-600 rounded-full"></span>Active</span>',
      planning: '<span class="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">Planning</span>',
      completed: '<span class="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">Completed</span>'
    };
    return badges[status] || badges.planning;
  }

  render() {
    const totalFamilies = jamaicaMapData.parishes.reduce((sum, p) => sum + p.familiesHelped, 0);
    const totalSupplies = jamaicaMapData.parishes.reduce((sum, p) => sum + p.suppliesDelivered, 0);
    const totalHomes = jamaicaMapData.parishes.reduce((sum, p) => sum + p.homesRebuilt, 0);

    this.container.innerHTML = `
      <div class="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
        <!-- Map Header Stats -->
        <div class="bg-gradient-to-r from-green-50 to-green-100 p-6 border-b border-gray-200">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Jamaica Impact Overview</h3>
          <div class="grid grid-cols-3 gap-4">
            <div class="text-center">
              <p class="text-2xl font-bold text-green-700">${totalFamilies.toLocaleString()}</p>
              <p class="text-xs text-gray-600 mt-1">Families Helped</p>
            </div>
            <div class="text-center">
              <p class="text-2xl font-bold text-green-700">${totalSupplies.toLocaleString()}</p>
              <p class="text-xs text-gray-600 mt-1">Supplies Delivered</p>
            </div>
            <div class="text-center">
              <p class="text-2xl font-bold text-green-700">${totalHomes}</p>
              <p class="text-xs text-gray-600 mt-1">Homes Rebuilt</p>
            </div>
          </div>
        </div>

        <div class="grid lg:grid-cols-3">
          <!-- Interactive Map -->
          <div class="lg:col-span-2 p-6 bg-gray-50">
            <div class="relative">
              <svg id="jamaica-svg" viewBox="0 0 900 400" class="w-full h-auto">
                <!-- Jamaica outline (simplified) -->
                <path d="M 150 200 L 200 180 L 250 170 L 320 180 L 380 170 L 450 160 L 520 150 L 580 155 L 650 165 L 720 180 L 770 200 L 800 240 L 780 270 L 740 290 L 680 300 L 620 305 L 560 300 L 500 295 L 440 300 L 380 310 L 320 315 L 260 310 L 200 290 L 160 260 Z"
                      fill="#f3f4f6"
                      stroke="#d1d5db"
                      stroke-width="2"/>

                <!-- Parish markers -->
                ${jamaicaMapData.parishes.map(parish => `
                  <g class="parish-marker" data-parish="${parish.id}" style="cursor: pointer;">
                    <circle
                      cx="${parish.coordinates.x}"
                      cy="${parish.coordinates.y}"
                      r="20"
                      fill="${this.getImpactColor(parish.impactLevel)}"
                      stroke="white"
                      stroke-width="3"
                      opacity="0.85"
                      class="parish-circle hover:opacity-100 transition-all duration-200"/>
                    <circle
                      cx="${parish.coordinates.x}"
                      cy="${parish.coordinates.y}"
                      r="8"
                      fill="white"
                      class="parish-pulse"/>
                  </g>
                `).join('')}
              </svg>

              <!-- Legend -->
              <div class="mt-6 flex flex-wrap gap-4 justify-center text-sm">
                <div class="flex items-center gap-2">
                  <div class="w-4 h-4 rounded-full bg-green-700"></div>
                  <span class="text-gray-600">High Impact</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-4 h-4 rounded-full bg-yellow-400"></div>
                  <span class="text-gray-600">Medium Impact</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-4 h-4 rounded-full bg-blue-300"></div>
                  <span class="text-gray-600">Low Impact</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-4 h-4 rounded-full bg-gray-200"></div>
                  <span class="text-gray-600">Planning</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Parish Details Panel -->
          <div class="p-6 bg-white border-l border-gray-200">
            <div id="parish-details">
              <div class="text-center text-gray-500 py-12">
                <i data-lucide="map-pin" class="w-12 h-12 mx-auto mb-3 text-gray-400"></i>
                <p class="text-sm">Click on a parish to see detailed impact information</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Parish List -->
        <div class="p-6 bg-gray-50 border-t border-gray-200">
          <h4 class="font-semibold text-gray-900 mb-4">All Parishes</h4>
          <div class="grid md:grid-cols-2 gap-3 max-h-64 overflow-y-auto">
            ${jamaicaMapData.parishes.map(parish => `
              <button
                class="parish-list-item text-left px-4 py-3 bg-white rounded-lg border border-gray-200 hover:border-green-300 hover:shadow-md transition-all"
                data-parish="${parish.id}">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="font-medium text-gray-900 text-sm">${parish.name}</p>
                    <p class="text-xs text-gray-500 mt-0.5">${parish.familiesHelped} families helped</p>
                  </div>
                  ${this.getStatusBadge(parish.status)}
                </div>
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    // Initialize Lucide icons
    if (window.lucide) {
      lucide.createIcons();
    }
  }

  showParishDetails(parishId) {
    const parish = jamaicaMapData.parishes.find(p => p.id === parishId);
    if (!parish) return;

    this.selectedParish = parishId;

    // Highlight selected parish on map
    document.querySelectorAll('.parish-marker').forEach(marker => {
      marker.classList.remove('selected');
    });
    document.querySelector(`[data-parish="${parishId}"]`).classList.add('selected');

    const detailsContainer = document.getElementById('parish-details');
    detailsContainer.innerHTML = `
      <div class="space-y-4">
        <div>
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold text-gray-900">${parish.name}</h3>
            ${this.getStatusBadge(parish.status)}
          </div>
          <div class="inline-block px-3 py-1 rounded-full text-xs font-medium"
               style="background-color: ${this.getImpactColor(parish.impactLevel)}20; color: ${this.getImpactColor(parish.impactLevel)}">
            ${parish.impactLevel.charAt(0).toUpperCase() + parish.impactLevel.slice(1)} Impact Area
          </div>
        </div>

        <div class="space-y-3">
          <div class="bg-green-50 rounded-lg p-4">
            <div class="flex items-center gap-3 mb-2">
              <div class="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <i data-lucide="users" class="w-5 h-5 text-white"></i>
              </div>
              <div>
                <p class="text-2xl font-bold text-green-700">${parish.familiesHelped}</p>
                <p class="text-xs text-gray-600">Families Helped</p>
              </div>
            </div>
          </div>

          <div class="bg-blue-50 rounded-lg p-4">
            <div class="flex items-center gap-3 mb-2">
              <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <i data-lucide="package" class="w-5 h-5 text-white"></i>
              </div>
              <div>
                <p class="text-2xl font-bold text-blue-700">${parish.suppliesDelivered.toLocaleString()}</p>
                <p class="text-xs text-gray-600">Supplies Delivered</p>
              </div>
            </div>
          </div>

          <div class="bg-purple-50 rounded-lg p-4">
            <div class="flex items-center gap-3 mb-2">
              <div class="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <i data-lucide="home" class="w-5 h-5 text-white"></i>
              </div>
              <div>
                <p class="text-2xl font-bold text-purple-700">${parish.homesRebuilt}</p>
                <p class="text-xs text-gray-600">Homes Rebuilt</p>
              </div>
            </div>
          </div>
        </div>

        ${parish.status === 'active' ? `
          <div class="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
            <p class="text-xs text-green-800">
              <strong>Active Relief:</strong> Ongoing distributions and rebuilding efforts in this parish.
            </p>
          </div>
        ` : ''}
      </div>
    `;

    // Re-initialize Lucide icons for the new content
    if (window.lucide) {
      lucide.createIcons();
    }
  }

  attachEventListeners() {
    // Map marker clicks
    document.querySelectorAll('.parish-marker').forEach(marker => {
      marker.addEventListener('click', (e) => {
        const parishId = marker.getAttribute('data-parish');
        this.showParishDetails(parishId);
      });

      marker.addEventListener('mouseenter', (e) => {
        marker.querySelector('.parish-circle').setAttribute('r', '24');
      });

      marker.addEventListener('mouseleave', (e) => {
        marker.querySelector('.parish-circle').setAttribute('r', '20');
      });
    });

    // Parish list clicks
    document.querySelectorAll('.parish-list-item').forEach(button => {
      button.addEventListener('click', () => {
        const parishId = button.getAttribute('data-parish');
        this.showParishDetails(parishId);

        // Scroll to map
        document.getElementById('jamaica-svg').scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      });
    });
  }
}

// Initialize map when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('jamaica-map-container')) {
    new JamaicaMap('jamaica-map-container');
  }
});
