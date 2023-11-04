export default function Section({ title, children, ...props }) {
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}
//ova {...props} gi zima id, className i
//sto bilo drugo so se dodava na <Section> vo Examples.jsx
