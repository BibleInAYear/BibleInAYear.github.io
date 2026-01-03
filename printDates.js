// ==========================================
// Bible Reading Plan Generator
// Modern ES6+ Implementation
// ==========================================

/**
 * Bible verse references for 365 days
 */
const verses = [
    "Genesis 1-3", "Genesis 4-7", "Genesis 8-11", "Genesis 12-15", "Genesis 16-18",
    "Genesis 19-21", "Genesis 22-24", "Genesis 25-26", "Genesis 27-29", "Genesis 30-31",
    "Genesis 32-34", "Genesis 35-37", "Genesis 38-40", "Genesis 41-42", "Genesis 43-45",
    "Genesis 46-47", "Genesis 48-50", "Exodus 1-3", "Exodus 4-6", "Exodus 7-9",
    "Exodus 10-12", "Exodus 13-15", "Exodus 16-18", "Exodus 19-21", "Exodus 22-24",
    "Exodus 25-27", "Exodus 28-29", "Exodus 30-32", "Exodus 33-35", "Exodus 36-38",
    "Exodus 39-40", "Leviticus 1-4", "Leviticus 5-7", "Leviticus 8-10", "Leviticus 11-13",
    "Leviticus 14-15", "Leviticus 16-18", "Leviticus 19-21", "Leviticus 22-23", "Leviticus 24-25",
    "Leviticus 26-27", "Numbers 1-2", "Numbers 3-4", "Numbers 5-6", "Numbers 7",
    "Numbers 8-10", "Numbers 11-13", "Numbers 14-15", "Numbers 16-17", "Numbers 18-20",
    "Numbers 21-22", "Numbers 23-25", "Numbers 26-27", "Numbers 28-30", "Numbers 31-32",
    "Numbers 33-34", "Numbers 35-36", "Deuteronomy 1-2", "Deuteronomy 3-4", "Deuteronomy 5-7",
    "Deuteronomy 8-10", "Deuteronomy 11-13", "Deuteronomy 14-16", "Deuteronomy 17-20", "Deuteronomy 21-23",
    "Deuteronomy 24-27", "Deuteronomy 28-29", "Deuteronomy 30-31", "Deuteronomy 32-34", "Joshua 1-4",
    "Joshua 5-8", "Joshua 9-11", "Joshua 12-15", "Joshua 16-18", "Joshua 19-21",
    "Joshua 22-24", "Judges 1-2", "Judges 3-5", "Judges 6-7", "Judges 8-9",
    "Judges 10-12", "Judges 13-15", "Judges 16-18", "Judges 19-21", "Ruth",
    "1 Samuel 1-3", "1 Samuel 4-8", "1 Samuel 9-12", "1 Samuel 13-14", "1 Samuel 15-17",
    "1 Samuel 18-20", "1 Samuel 21-24", "1 Samuel 25-27", "1 Samuel 28-31", "2 Samuel 1-3",
    "2 Samuel 4-7", "2 Samuel 8-12", "2 Samuel 13-15", "2 Samuel 16-18", "2 Samuel 19-21",
    "2 Samuel 22-24", "1 Kings 1-2", "1 Kings 3-5", "1 Kings 6-7", "1 Kings 8-9",
    "1 Kings 10-11", "1 Kings 12-14", "1 Kings 15-17", "1 Kings 18-20", "1 Kings 21-22",
    "2 Kings 1-3", "2 Kings 4-5", "2 Kings 6-8", "2 Kings 9-11", "2 Kings 12-14",
    "2 Kings 15-17", "2 Kings 18-19", "2 Kings 20-22", "2 Kings 23-25", "1 Chronicles 1-2",
    "1 Chronicles 3-5", "1 Chronicles 6", "1 Chronicles 7-8", "1 Chronicles 9-11", "1 Chronicles 12-14",
    "1 Chronicles 15-17", "1 Chronicles 18-21", "1 Chronicles 22-24", "1 Chronicles 25-27", "1 Chronicles 28-29 and 2 Chronicles 1",
    "2 Chronicles 2-5", "2 Chronicles 6-8", "2 Chronicles 9-12", "2 Chronicles 13-17", "2 Chronicles 18-20",
    "2 Chronicles 21-24", "2 Chronicles 25-27", "2 Chronicles 28-31", "2 Chronicles 32-34", "2 Chronicles 35-36",
    "Ezra 1-3", "Ezra 4-7", "Ezra 8-10", "Nehemiah 1-3", "Nehemiah 4-6",
    "Nehemiah 7", "Nehemiah 8-9", "Nehemiah 10-11", "Nehemiah 12-13", "Esther 1-5",
    "Esther 6-10", "Job 1-4", "Job 5-7", "Job 8-10", "Job 11-13",
    "Job 14-16", "Job 17-20", "Job 21-23", "Job 24-28", "Job 29-31",
    "Job 32-34", "Job 35-37", "Job 38-39", "Job 40-42", "Psalms 1-8",
    "Psalms 9-16", "Psalms 17-20", "Psalms 21-25", "Psalms 26-31", "Psalms 32-35",
    "Psalms 36-39", "Psalms 40-45", "Psalms 46-50", "Psalms 51-57", "Psalms 58-65",
    "Psalms 66-69", "Psalms 70-73", "Psalms 74-77", "Psalms 78-79", "Psalms 80-85",
    "Psalms 86-89", "Psalms 90-95", "Psalms 96-102", "Psalms 103-105", "Psalms 106-107",
    "Psalms 108-114", "Psalms 115-118", "Psalms 119:1-88", "Psalms 119:89-176", "Psalms 120-132",
    "Psalms 133-139", "Psalms 140-145", "Psalms 146-150", "Proverbs 1-3", "Proverbs 4-6",
    "Proverbs 7-9", "Proverbs 10-12", "Proverbs 13-15", "Proverbs 16-18", "Proverbs 19-21",
    "Proverbs 22-23", "Proverbs 24-26", "Proverbs 27-29", "Proverbs 30-31", "Ecclesiastes 1-4",
    "Ecclesiastes 5-8", "Ecclesiastes 9-12", "Song of Solomon 1-8", "Isaiah 1-4", "Isaiah 5-8",
    "Isaiah 9-12", "Isaiah 13-17", "Isaiah 18-22", "Isaiah 23-27", "Isaiah 28-30",
    "Isaiah 31-35", "Isaiah 36-41", "Isaiah 42-44", "Isaiah 45-48", "Isaiah 49-53",
    "Isaiah 54-58", "Isaiah 59-63", "Isaiah 64-66", "Jeremiah 1-3", "Jeremiah 4-6",
    "Jeremiah 7-9", "Jeremiah 10-13", "Jeremiah 14-17", "Jeremiah 18-22", "Jeremiah 23-25",
    "Jeremiah 26-29", "Jeremiah 30-31", "Jeremiah 32-34", "Jeremiah 35-37", "Jeremiah 38-41",
    "Jeremiah 42-45", "Jeremiah 46-48", "Jeremiah 49-50", "Jeremiah 51-52", "Lamentations 1-3:36",
    "Lamentations 3:37-5", "Ezekiel 1-4", "Ezekiel 5-8", "Ezekiel 9-12", "Ezekiel 13-15",
    "Ezekiel 16-17", "Ezekiel 18-20", "Ezekiel 21-22", "Ezekiel 23-24", "Ezekiel 25-27",
    "Ezekiel 28-30", "Ezekiel 31-33", "Ezekiel 34-36", "Ezekiel 37-39", "Ezekiel 40-42",
    "Ezekiel 43-45", "Ezekiel 46-48", "Daniel 1-3", "Daniel 4-6", "Daniel 7-9",
    "Daniel 10-12", "Hosea 1-7", "Hosea 8-14", "Joel", "Amos 1-5",
    "Amos 6-9", "Obadiah and Jonah", "Micah 1-7", "Nahum 1-3", "Habakkuk and Zephaniah",
    "Haggai 1-2", "Zechariah 1-7", "Zechariah 8-14", "Malachi 1-4", "Matthew 1-4",
    "Matthew 5-6", "Matthew 7-8", "Matthew 9-10", "Matthew 11-12", "Matthew 13-14",
    "Matthew 15-17", "Matthew 18-19", "Matthew 20-21", "Matthew 22-23", "Matthew 24-25",
    "Matthew 26", "Matthew 27-28", "Mark 1-3", "Mark 4-5", "Mark 6-7",
    "Mark 8-9", "Mark 10-11", "Mark 12-13", "Mark 14", "Mark 15-16",
    "Luke 1", "Luke 2-3", "Luke 4-5", "Luke 6-7", "Luke 8-9",
    "Luke 10-11", "Luke 12-13", "Luke 14-16", "Luke 17-18", "Luke 19-20",
    "Luke 21-22", "Luke 23-24", "John 1-2", "John 3-4", "John 5-6",
    "John 7-8", "John 9-10", "John 11-12", "John 13-15", "John 16-18",
    "John 19-21", "Acts 1-3", "Acts 4-6", "Acts 7-8", "Acts 9-10",
    "Acts 11-13", "Acts 14-15", "Acts 16-17", "Acts 18-20", "Acts 21-23",
    "Acts 24-26", "Acts 27-28", "Romans 1-3", "Romans 4-7", "Romans 8-10",
    "Romans 11-13", "Romans 14-16", "1 Corinthians 1-4", "1 Corinthians 5-8", "1 Corinthians 9-11",
    "1 Corinthians 12-14", "1 Corinthians 15-16", "2 Corinthians 1-4", "2 Corinthians 5-9", "2 Corinthians 10-13",
    "Galatians 1-3", "Galatians 4-6", "Ephesians 1-3", "Ephesians 4-6", "Philippians",
    "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy",
    "Titus and Philemon", "Hebrews 1-6", "Hebrews 7-10", "Hebrews 11-13", "James",
    "1 Peter", "2 Peter", "1 John", "2John, 3John, and Jude", "Revelation 1-3",
    "Revelation 4-8", "Revelation 9-12", "Revelation 13-16", "Revelation 17-19", "Revelation 20-22"
];

/**
 * Generate Bible Gateway URLs from verse references
 */
const generateBibleGatewayUrl = (verse) => {
    const search = verse.replace(/\s+/g, '+');
    return `https://www.biblegateway.com/passage/?search=${search}`;
};

// ==========================================
// State Management
// ==========================================

class BiblePlanState {
    constructor() {
        this.storageKey = 'biblePlanProgress';
        this.planKey = 'biblePlanData';
    }

    savePlan(startDate, dates) {
        const planData = {
            startDate: startDate.toISOString(),
            dates: dates,
            createdAt: new Date().toISOString()
        };
        localStorage.setItem(this.planKey, JSON.stringify(planData));
    }

    loadPlan() {
        const data = localStorage.getItem(this.planKey);
        return data ? JSON.parse(data) : null;
    }

    saveProgress(completedDays) {
        localStorage.setItem(this.storageKey, JSON.stringify(completedDays));
    }

    loadProgress() {
        const data = localStorage.getItem(this.storageKey);
        return data ? JSON.parse(data) : {};
    }

    clearProgress() {
        localStorage.removeItem(this.storageKey);
    }

    clearAll() {
        localStorage.removeItem(this.storageKey);
        localStorage.removeItem(this.planKey);
    }
}

const state = new BiblePlanState();

// ==========================================
// Date Generation
// ==========================================

/**
 * Generate array of dates for 365 days
 * @param {Date} startDate - Starting date
 * @returns {string[]} Array of formatted dates
 */
function generateDates(startDate) {
    const dates = [];
    const current = new Date(startDate);
    
    for (let i = 0; i < 365; i++) {
        dates.push(new Date(current).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        }));
        current.setDate(current.getDate() + 1);
    }
    
    return dates;
}

// ==========================================
// UI Rendering
// ==========================================

/**
 * Update progress indicator
 */
function updateProgress() {
    const progress = state.loadProgress();
    const completedCount = Object.keys(progress).length;
    const percentage = Math.round((completedCount / 365) * 100);
    
    const progressText = document.querySelector('.progress-text');
    const progressBar = document.querySelector('.progress-ring-bar');
    
    if (progressText) {
        progressText.textContent = `${percentage}%`;
    }
    
    if (progressBar) {
        const radius = 26;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (percentage / 100) * circumference;
        progressBar.style.strokeDasharray = `${circumference} ${circumference}`;
        progressBar.style.strokeDashoffset = offset;
    }
}

/**
 * Render the reading plan table
 * @param {string[]} dates - Array of formatted dates
 */
function renderPlan(dates) {
    const output = document.getElementById('output');
    const progress = state.loadProgress();
    
    const tableHTML = `
        <div class="table-wrapper">
            <table class="reading-table">
                <thead>
                    <tr>
                        <th class="col-check">Done</th>
                        <th class="col-day">Day</th>
                        <th class="col-date">Date</th>
                        <th class="col-reading">Bible Reading</th>
                    </tr>
                </thead>
                <tbody>
                    ${verses.map((verse, index) => {
                        const isCompleted = progress[index] === true;
                        const url = generateBibleGatewayUrl(verse);
                        
                        return `
                            <tr class="reading-row ${isCompleted ? 'completed' : ''}" data-day="${index}">
                                <td class="col-check">
                                    <label class="checkbox-container">
                                        <input 
                                            type="checkbox" 
                                            class="reading-checkbox" 
                                            data-day="${index}"
                                            ${isCompleted ? 'checked' : ''}
                                        >
                                        <span class="checkmark"></span>
                                    </label>
                                </td>
                                <td class="col-day">
                                    <span class="day-badge">Day ${index + 1}</span>
                                </td>
                                <td class="col-date">${dates[index]}</td>
                                <td class="col-reading">
                                    <a href="${url}" target="_blank" rel="noopener noreferrer" class="reading-link">
                                        <span class="verse-text">${verse}</span>
                                        <svg class="external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                    </a>
                                </td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        </div>
    `;
    
    output.innerHTML = tableHTML;
    attachCheckboxListeners();
    updateProgress();
}

/**
 * Attach event listeners to checkboxes
 */
function attachCheckboxListeners() {
    const checkboxes = document.querySelectorAll('.reading-checkbox');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const day = parseInt(e.target.dataset.day);
            const row = e.target.closest('.reading-row');
            const progress = state.loadProgress();
            
            if (e.target.checked) {
                progress[day] = true;
                row.classList.add('completed');
            } else {
                delete progress[day];
                row.classList.remove('completed');
            }
            
            state.saveProgress(progress);
            updateProgress();
        });
    });
}

// ==========================================
// Main Functions
// ==========================================

/**
 * Generate and display the reading plan
 */
function generatePlan() {
    const dateInput = document.getElementById('start_date');
    
    if (!dateInput.value) {
        showNotification('Please select a starting date', 'error');
        dateInput.focus();
        return;
    }
    
    const startDate = new Date(dateInput.value + 'T00:00:00');
    const dates = generateDates(startDate);
    
    state.savePlan(startDate, dates);
    
    document.getElementById('setup-section').style.display = 'none';
    document.getElementById('plan-section').style.display = 'block';
    
    renderPlan(dates);
    showNotification('Your reading plan has been generated!', 'success');
}

/**
 * Reset the plan
 */
function resetPlan() {
    document.getElementById('plan-section').style.display = 'none';
    document.getElementById('setup-section').style.display = 'flex';
    document.getElementById('start_date').value = '';
}

/**
 * Clear all progress
 */
function clearProgress() {
    if (confirm('Are you sure you want to clear all your reading progress? This cannot be undone.')) {
        state.clearProgress();
        const plan = state.loadPlan();
        if (plan) {
            renderPlan(plan.dates);
        }
        showNotification('Progress cleared', 'info');
    }
}

/**
 * Print the reading plan
 */
function printPlan() {
    window.print();
}

/**
 * Show notification
 */
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ==========================================
// Initialization
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Set default date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('start_date').value = today;
    
    // Attach event listeners
    document.getElementById('generate-btn').addEventListener('click', generatePlan);
    document.getElementById('reset-btn').addEventListener('click', resetPlan);
    document.getElementById('clear-progress-btn').addEventListener('click', clearProgress);
    document.getElementById('print-btn').addEventListener('click', printPlan);
    
    // Handle Enter key on date input
    document.getElementById('start_date').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            generatePlan();
        }
    });
    
    // Load existing plan if available
    const savedPlan = state.loadPlan();
    if (savedPlan) {
        const startDate = new Date(savedPlan.startDate);
        document.getElementById('start_date').value = startDate.toISOString().split('T')[0];
        document.getElementById('setup-section').style.display = 'none';
        document.getElementById('plan-section').style.display = 'block';
        renderPlan(savedPlan.dates);
    }
});
