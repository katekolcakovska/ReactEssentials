// export default function TabButton(props) {
//     return <li><button onClick={handleClick}>{props.children}</button></li>;
// }

export default function TabButton({ children, onSelect, isSelected }) {
    return <li><button className={isSelected ? "active" : ""} onClick={onSelect}>{children}</button></li>;
}

// export default function TabButton({ label }) {
//     return <li><button>{label}</button></li>;
// }