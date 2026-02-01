// Date
const d = new Date();
const dateDisplay = document.getElementById('dateDisplay');
if (dateDisplay) {
  dateDisplay.textContent = d.toISOString().split('T')[0];
}

// Reveal Logic
function toggleOne(id) {
  const el = document.getElementById(id);
  if (el) {
    el.style.display = (el.style.display === 'block') ? 'none' : 'block';
  }
}

// Toggle Sidebar Groups
function toggleGroup(headerBtn) {
  const group = headerBtn.parentElement;
  group.classList.toggle('collapsed');
}

// Navigation Logic
function navigateTo(sectionId, subLinkId = null) {
  // 1. Hide all sections
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(sec => sec.classList.remove('active'));

  // 2. Show target section
  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.add('active');
  }

  // 3. Update Sidebar Active State
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => item.classList.remove('active'));
  const activeNav = document.getElementById('nav-' + sectionId);
  if (activeNav) activeNav.classList.add('active');

  // 4. Ensure parent group is expanded
  if (activeNav) {
    const parentGroup = activeNav.closest('.nav-group');
    if (parentGroup) parentGroup.classList.remove('collapsed');
  }

  // 5. Scroll handling
  const mainScroll = document.getElementById('main-scroll');

  if (subLinkId) {
    // If sub-link, scroll to that specific element within the section
    // We need a slight delay to allow the section to become visible first
    setTimeout(() => {
      const subTarget = document.getElementById(subLinkId);
      if (subTarget) subTarget.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  } else {
    // Otherwise, scroll to top of main content
    if (mainScroll) {
      mainScroll.scrollTop = 0;
    }
  }
}

// Export functions to global scope for onclick handlers
window.toggleOne = toggleOne;
window.toggleGroup = toggleGroup;
window.navigateTo = navigateTo;
