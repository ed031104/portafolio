
export function ProjectModal({ skill, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{skill.name}</h2>
        <p>{skill.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}