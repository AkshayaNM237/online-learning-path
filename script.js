document.addEventListener('DOMContentLoaded', () => {
    const courses = [
        { title: 'Web Development', description: 'Learn to build websites using HTML, CSS, and JavaScript.' },
        { title: 'Data Science', description: 'Analyze data and gain insights with Python and R.' },
        { title: 'Machine Learning', description: 'Master the fundamentals of machine learning algorithms.' },
        { title: 'Digital Marketing', description: 'Understand the strategies to market products online.' },
        { title: 'Graphic Design', description: 'Create stunning visuals using tools like Photoshop and Illustrator.' },
        { title: 'Cybersecurity', description: 'Learn to protect systems and data from cyber threats.' }
    ];

    const courseList = document.querySelector('.course-list');

    courses.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.classList.add('course');
        courseItem.innerHTML = `
            <h3>${course.title}</h3>
            <p>${course.description}</p>
        `;
        courseList.appendChild(courseItem);
    });

    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for contacting us!');
    });
});