/**
 * 现代科技风格增强效果
 * Modern Tech Style Enhancements
 */

(function() {
  'use strict';

  // 配置
  const config = {
    // 启用毛玻璃效果
    enableGlassmorphism: true,
    // 启用卡片悬浮动画
    enableCardHover: true,
    // 启用进度条
    enableProgressBar: true,
    // 启用返回顶部按钮
    enableBackToTop: true,
    // 启用平滑滚动
    enableSmoothScroll: true
  };

  // DOM 加载完成后初始化
  document.addEventListener('DOMContentLoaded', function() {
    initGlassmorphism();
    initCardHover();
    initProgressBar();
    initBackToTop();
    initSmoothScroll();
    initParallax();
    initTypewriter();
    initIntersectionObserver();
  });

  // 毛玻璃效果
  function initGlassmorphism() {
    if (!config.enableGlassmorphism) return;

    const glassElements = document.querySelectorAll(
      '.card-widget, .recent-post-item, .card-categories-item, .card-tag-cloud-item'
    );

    glassElements.forEach(el => {
      el.style.backdropFilter = 'blur(10px)';
      el.style.webkitBackdropFilter = 'blur(10px)';
      el.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.1)';
    });
  }

  // 卡片悬浮效果
  function initCardHover() {
    if (!config.enableCardHover) return;

    const cards = document.querySelectorAll('.recent-post-item, .card-categories-item, .card-tag-cloud-item');

    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px) scale(1.02)';
        this.style.boxShadow = '0 12px 24px rgba(0, 102, 255, 0.15)';
      });

      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
      });
    });
  }

  // 阅读进度条
  function initProgressBar() {
    if (!config.enableProgressBar) return;

    const progressBar = document.createElement('div');
    progressBar.id = 'modern-progress-bar';
    progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 0%;
      height: 3px;
      background: linear-gradient(90deg, #0066FF, #00D4AA);
      z-index: 9999;
      transition: width 0.1s ease;
      box-shadow: 0 2px 10px rgba(0, 102, 255, 0.3);
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', updateProgress);
  }

  function updateProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    document.getElementById('modern-progress-bar').style.width = scrolled + '%';
  }

  // 返回顶部按钮
  function initBackToTop() {
    if (!config.enableBackToTop) return;

    const backToTop = document.createElement('div');
    backToTop.id = 'modern-back-to-top';
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.style.cssText = `
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #0066FF, #00D4AA);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 4px 15px rgba(0, 102, 255, 0.3);
      transition: all 0.3s ease;
      opacity: 0;
      visibility: hidden;
      z-index: 999;
      font-size: 20px;
    `;

    document.body.appendChild(backToTop);

    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTop.style.opacity = '1';
        backToTop.style.visibility = 'visible';
      } else {
        backToTop.style.opacity = '0';
        backToTop.style.visibility = 'hidden';
      }
    });

    backToTop.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 平滑滚动
  function initSmoothScroll() {
    if (!config.enableSmoothScroll) return;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
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
  }

  // 视差滚动效果
  function initParallax() {
    const heroSection = document.querySelector('.page-header');
    if (!heroSection) return;

    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      const parallax = scrolled * 0.5;

      heroSection.style.transform = `translateY(${parallax}px)`;
    });
  }

  // 打字机效果增强
  function initTypewriter() {
    const subtitle = document.querySelector('#subtitle');
    if (!subtitle) return;

    subtitle.style.cssText = `
      background: linear-gradient(90deg, #0066FF, #00D4AA);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      font-weight: 700;
    `;
  }

  // 元素进入动画
  function initIntersectionObserver() {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'slideIn 0.6s ease-out forwards';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.post-item, .card-widget').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      observer.observe(el);
    });
  }

  // 添加全局样式
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.7;
      }
    }

    @keyframes shimmer {
      0% {
        background-position: -200% center;
      }
      100% {
        background-position: 200% center;
      }
    }

    /* 现代化文章标题 */
    .post-title a {
      position: relative;
      display: inline-block;
      background-size: 200% auto;
      color: #1A1A1A;
      background-image: linear-gradient(
        to right,
        #1A1A1A 0%,
        #1A1A1A 50%,
        #0066FF 50%,
        #1A1A1A 50.01%,
        #1A1A1A 100%
      );
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      text-fill-color: transparent;
      transition: background-position 0.5s ease;
      background-position: -200% center;
    }

    .post-title a:hover {
      background-position: 200% center;
    }

    /* 深色模式适配 */
    @media (prefers-color-scheme: dark) {
      .post-title a {
        background-image: linear-gradient(
          to right,
          #FFFFFF 0%,
          #FFFFFF 50%,
          #00D4AA 50%,
          #FFFFFF 50.01%,
          #FFFFFF 100%
        );
      }

      body {
        background-color: #1A1A1A;
      }
    }

    /* 现代化卡片阴影 */
    .modern-card-shadow {
      box-shadow:
        0 1px 3px rgba(0, 0, 0, 0.12),
        0 4px 12px rgba(0, 102, 255, 0.08);
    }

    /* 光标闪烁效果 */
    .typed-cursor {
      animation: blink 1s infinite;
    }

    @keyframes blink {
      0%, 50% {
        opacity: 1;
      }
      51%, 100% {
        opacity: 0;
      }
    }

    /* 链接悬浮效果 */
    a:not(.btn, .card-info):hover {
      position: relative;
    }

    a:not(.btn, .card-info):hover::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -2px;
      left: 0;
      background: linear-gradient(90deg, #0066FF, #00D4AA);
      animation: expandWidth 0.3s ease forwards;
    }

    @keyframes expandWidth {
      from {
        width: 0;
        left: 50%;
      }
      to {
        width: 100%;
        left: 0;
      }
    }
  `;

  document.head.appendChild(style);

  // 暴露全局配置以便外部使用
  window.ModernTechStyle = {
    config: config,
    init: function() {
      initGlassmorphism();
      initCardHover();
      initProgressBar();
      initBackToTop();
      initSmoothScroll();
      initParallax();
      initTypewriter();
      initIntersectionObserver();
    }
  };
})();
