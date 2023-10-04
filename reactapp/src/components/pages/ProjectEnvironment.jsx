import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DrawingCanvas from '../Drawing';
import MusicComposing from '../MusicComposing';
import '../../assets/css/ProjectEnvironment.css';
import Header from '../Header';
import Footer from '../Footer';
import WritingPad from '../WrittingPad';

function ProjectEnvironment() {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const project = useSelector(state => state.project.projects.find(p => p.projectId === projectId));

    if (!project) {
        console.log(projectId);
        navigate('/projects'); 
        return null;
    }
    const renderEnvironment = () => {
        switch (project.type) {
            case 'visual':
                return <DrawingCanvas />;
            case 'music':
                return <MusicComposing />;
            case 'writing':
                return <WritingPad   />;
            default:
                return null;
        }
    };

    return (
        <div className="container">
            <aside className="left-column">
    <h3 className="details-title">Project Details:</h3>
    <div className="details-item">
        <strong>ID:</strong> {project.projectId}
    </div>
    <div className="details-item">
        <strong>Title:</strong> {project.title}
    </div>
    <div className="details-item">
        <strong>Description:</strong> {project.description}
    </div>
    <div className="details-item">
        <strong>Type:</strong> {project.type}
    </div>
    <div className="details-item">
        <strong>Privacy:</strong> {project.privacy}
    </div>
    <div className="details-item">
        <strong>Team Members:</strong>
        <ul className="details-list">
            {project.teamMembers.map(member => <li key={member}>{member}</li>)}
        </ul>
    </div>
    <div className="details-item">
        <strong>Goals:</strong>
        <ul className="details-list">
            {project.goals.map(goal => <li key={goal}>{goal}</li>)}
        </ul>
    </div>
</aside>


            <main className="right-environment">
                {renderEnvironment()}
            </main>
        </div>
    );
}

export default ProjectEnvironment;
