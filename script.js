// Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Intersection Observer for section animations
        const sections = document.querySelectorAll('.section');
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });

       

        const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.getElementById('modalClose');
const galleryItems = document.querySelectorAll('.gallery-item');
let currentImageIndex = 0;
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

galleryItems.forEach((item, index) => {
  item.addEventListener('click', function() {
    const imageUrl = this.getAttribute('data-image');
    modalImage.src = imageUrl;
    currentImageIndex = index;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

modalImage.addEventListener('click', function(e) {
  e.stopPropagation(); // prevent closing modal
  currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
  modalImage.src = galleryItems[currentImageIndex].getAttribute('data-image');
});

nextBtn.addEventListener('click', function(e) {
  e.stopPropagation();
  currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
  modalImage.src = galleryItems[currentImageIndex].getAttribute('data-image');
});

prevBtn.addEventListener('click', function(e) {
  e.stopPropagation();
  currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
  modalImage.src = galleryItems[currentImageIndex].getAttribute('data-image');
});

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', function(e) {
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener('keydown', function(e) {
  if (!modal.classList.contains('active')) return;

  if (e.key === 'Escape') {
    closeModal();
  } else if (e.key === 'ArrowRight') {
    currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
    modalImage.src = galleryItems[currentImageIndex].getAttribute('data-image');
  } else if (e.key === 'ArrowLeft') {
    currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
    modalImage.src = galleryItems[currentImageIndex].getAttribute('data-image');
  }
});


        // Gallery item hover effects
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.animationPlayState = 'paused';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.animationPlayState = 'running';
            });
        });

        // Service card interactions
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('click', function() {
                // Add a subtle feedback animation
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });

        // Add some dynamic content loading
        window.addEventListener('load', function() {
            // Trigger any additional animations or content loading here
            console.log('Michelle\'s Boutique website loaded successfully!');
        });

  function toggleDetails(card) {
    card.classList.toggle('active');
  }

  document.querySelectorAll('.gallery-item').forEach(item => {
    const imgUrl = item.getAttribute('data-image');
    if (imgUrl) {
      item.style.backgroundImage = `url('${imgUrl}')`;
    }
  });

// Enhanced Contact Form Handler - Production Ready
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwgvT77C2_ndOGlrdybSPjo1RtMF5F4rURKfiaq0hC-M0riqFDIFdCxJN7eVd9bi6KC/exec';

// Utility functions
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validatePhone = (phone) => {
    // Basic phone validation - adjust regex as needed
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return !phone || phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
};

const showInlineMessage = (form, message, type = 'success') => {
    // Remove any existing inline messages
    const existingMessage = form.querySelector('.inline-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new inline message
    const messageDiv = document.createElement('div');
    messageDiv.className = `inline-message inline-message--${type}`;
    messageDiv.style.cssText = `
        padding: 12px 16px;
        margin: 16px 0;
        border-radius: 6px;
        font-size: 14px;
        line-height: 1.4;
        animation: slideIn 0.3s ease-out;
        ${type === 'success' 
            ? 'background-color: #d4edda; color: #155724; border: 1px solid #c3e6cb;' 
            : 'background-color: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;'
        }
    `;
    messageDiv.textContent = message;
    
    // Add animation keyframes if not already present
    if (!document.querySelector('#inline-message-styles')) {
        const style = document.createElement('style');
        style.id = 'inline-message-styles';
        style.textContent = `
            @keyframes slideIn {
                from { opacity: 0; transform: translateY(-10px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Insert message at the top of the form
    form.insertBefore(messageDiv, form.firstChild);
    
    // Auto-remove success messages after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.style.animation = 'slideIn 0.3s ease-out reverse';
                setTimeout(() => messageDiv.remove(), 300);
            }
        }, 5000);
    }
};

const hideInlineMessages = (form) => {
    const existingMessage = form.querySelector('.inline-message');
    if (existingMessage) {
        existingMessage.remove();
    }
};

const setLoadingState = (isLoading) => {
    const submitBtn = document.getElementById('submitBtn');
    const loading = document.getElementById('loading');
    
    if (submitBtn) {
        submitBtn.disabled = isLoading;
        submitBtn.textContent = isLoading ? 'Sending...' : 'Send Message';
    }
    
    if (loading) {
        loading.style.display = isLoading ? 'block' : 'none';
    }
};

// Main form handler
const handleFormSubmission = async (e) => {
    e.preventDefault();
    
    const form = e.target;
    
    // Hide previous inline messages
    hideInlineMessages(form);
    
    // Show loading state
    setLoadingState(true);
    
    try {
        // Extract and validate form data
        const formData = {
            name: form.name?.value?.trim() || '',
            email: form.email?.value?.trim() || '',
            phone: form.phone?.value?.trim() || '',
            eventType: form.eventType?.value || form['event-type']?.value || '',
            message: form.message?.value?.trim() || ''
        };
        
        // Comprehensive validation
        const errors = [];
        
        if (!formData.name) {
            errors.push('Please enter your full name');
        }
        
        if (!formData.email) {
            errors.push('Please enter your email address');
        } else if (!validateEmail(formData.email)) {
            errors.push('Please enter a valid email address');
        }
        
        if (!formData.eventType) {
            errors.push('Please select an event type');
        }
        
        if (formData.phone && !validatePhone(formData.phone)) {
            errors.push('Please enter a valid phone number');
        }
        
        if (errors.length > 0) {
            throw new Error(errors.join('. '));
        }
        
        // Log form data for debugging (remove in production)
        console.log('Submitting form data:', formData);
        
        // Submit to Google Apps Script
        const response = await fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // Required for Google Apps Script
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        
        // Note: With no-cors mode, we can't read the response
        // Assume success if no network error occurred
        
        // Show success message inside form
        showInlineMessage(form, 
            '✅ Thank you for your inquiry! Your reference token has been sent to your email. We\'ll get back to you within 24 hours.', 
            'success'
        );
        
        // Reset form after a short delay to let user see the success message
        setTimeout(() => {
            form.reset();
        }, 1000);
        
    } catch (error) {
        console.error('Form submission error:', error);
        
        // Show error message inside form
        showInlineMessage(form, 
            `❌ ${error.message || 'Failed to send message. Please try again.'}`, 
            'error'
        );
    } finally {
        // Reset loading state
        setLoadingState(false);
    }
};

// Initialize form handler when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
        console.log('Contact form handler initialized');
    } else {
        console.warn('Contact form not found - make sure element has id="contactForm"');
    }
});

// Fallback for immediate execution if DOM already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        // Already handled above
    });
} else {
    const contactForm = document.getElementById('contactForm');
    if (contactForm && !contactForm.hasAttribute('data-handler-attached')) {
        contactForm.addEventListener('submit', handleFormSubmission);
        contactForm.setAttribute('data-handler-attached', 'true');
        console.log('Contact form handler initialized (immediate)');
    }
}