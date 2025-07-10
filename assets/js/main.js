document.addEventListener("DOMContentLoaded", function() { 
    const shareIcons = document.getElementById('share-icons');
    const avatarMichelle = document.getElementById('avatar-michelle');
    const textInfo = document.querySelector('.text-info');
    const contentElement = document.querySelector('.content');
    const shareButton = document.querySelector('.share');
    const iconShare = document.getElementById('icon-share');
    shareIcons.style.display = 'none';

    document.querySelector('.share').addEventListener('click', function() {
        const isHidden = shareIcons.style.display === 'none' || shareIcons.style.display === '';
        shareIcons.style.display = isHidden ? 'flex' : 'none';
        
        iconShare.classList.toggle('white', isHidden);
        shareButton.classList.toggle('active', isHidden);

        shareButton.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
        shareButton.setAttribute('aria-label', isHidden ? 'Close sharing options' : 'Open sharing options');
        
        if (window.innerWidth <= 875) {
            avatarMichelle.style.display = isHidden ? 'none' : 'block';
            textInfo.style.display = isHidden ? 'none' : 'flex';
            contentElement.style.height = isHidden ? '304px' : '312px';
            if (isHidden) {
                shareButton.style.marginLeft = 'auto';
                shareButton.style.marginRight = '32px';
            } else {
                shareButton.style.marginLeft = '64px';
                shareButton.style.marginRight = '';
            }
        }
    });
    
    window.addEventListener('resize', function() {
        const isShareActive = shareIcons.style.display === 'flex';

        if (window.innerWidth > 875) {
            avatarMichelle.style.display = 'block';
            textInfo.style.display = 'flex';
            shareIcons.style.display = 'none';
            contentElement.style.height = '280px';
            shareButton.style.marginLeft = '166px';
            shareButton.style.marginRight = '';
        } else {
            if (isShareActive) {
                avatarMichelle.style.display = 'none';
                textInfo.style.display = 'none';
                contentElement.style.height = '304px';
                shareButton.style.marginLeft = 'auto';
                shareButton.style.marginRight = '32px';
            } else {
                avatarMichelle.style.display = 'block';
                textInfo.style.display = 'flex';
                contentElement.style.height = '312px';
                shareButton.style.marginLeft = '64px';
                shareButton.style.marginRight = '';
            }
        }
    });
});