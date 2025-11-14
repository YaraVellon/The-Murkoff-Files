const updates = [
    {
        img: "images/updates/up3.png",
        title: "Hotfix Patch Notes | Invasion – November 5th",
        date: "2025-11-05",
        categories: ["The Outlast Trials", "Patch Notes"],
        link: "update4.html"
    },
    {
        img: "images/updates/up2.webp",
        title: "Season 4 Update | New Features",
        date: "2025-11-01",
        categories: ["The Outlast Trials", "Patch Notes"],
        link: "update3.html"
    },
    {
        img: "images/updates/up1.webp",
        title: "Deep Burn Update Path Notes | New MK-Challenges, Limited-Time Events Catalog & more!",
        date: "2025-11-01",
        categories: ["The Outlast Trials", "Patch Notes"],
        link: "update2.html"
    },
    {
        img: "images/updates/up4.jpg",
        title: "Major Update | New Invasion Experimental Therapy, Geister is Back & More",
        date: "2025-09-09",
        categories: ["The Outlast Trials", "Patch Notes"],
        link: "update1.html"
    }
];

const container = document.querySelector('.updates-container');

updates.forEach(update => {
    const article = document.createElement('article');
    article.className = 'post-preview';
    article.innerHTML = `
        <a href="${update.link}" class="post-preview__link">
            <div class="post-preview__media">
                <img src="${update.img}" alt="${update.title}">
            </div>
            <div class="post-preview__meta">
                <time datetime="${update.date}">${new Date(update.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
                <ul class="post-preview__categories">
                    ${update.categories.map(cat => `<li>${cat}</li>`).join('')}
                </ul>
            </div>
            <div class="post-preview__titleWrap">
                <h3 class="post-preview__title">${update.title}</h3>
            </div>
        </a>
    `;
    container.appendChild(article);
});
