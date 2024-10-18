import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Your Name - Portfolio</title>
                <meta name="description" content="Welcome to my portfolio." />
            </Head>

            <header className={styles.header}>
                <h1>Your Name</h1>
                <nav>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <section id="about">
                <h2>About Me</h2>
                <p>Write a brief introduction about yourself here.</p>
            </section>

            <section id="skills">
                <h2>Skills</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Other relevant skills</li>
                </ul>
            </section>

            <section id="contact">
                <h2>Contact</h2>
                <form id="contactForm">
                    <input type="text" id="name" placeholder="Your Name" required />
                    <input type="email" id="email" placeholder="Your Email" required />
                    <textarea id="message" placeholder="Your Message" required></textarea>
                    <button type="submit">Send</button>
                </form>
                <div id="formResponse"></div>
            </section>

            <footer>
                <p>&copy; 2024 Your Name. All rights reserved.</p>
            </footer>

            <script>
                // JavaScript to handle form submission
                document.getElementById('contactForm').addEventListener('submit', function(event) {
                    event.preventDefault();
                    const name = document.getElementById('name').value;
                    const response = `Thank you, ${name}! Your message has been sent.`;
                    document.getElementById('formResponse').innerText = response;

                    // Clear the form fields
                    event.target.reset();
                });
            </script>
        </div>
    );
}
