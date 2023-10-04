import React, { useState } from 'react';
import '../../assets/css/ProjectCreate.css';
import { useDispatch } from 'react-redux';
import { addProject } from '../Redux/ProjectSlice';
import { v4 as uuidv4 } from 'uuid';

function ProjectCreate({ onProjectCreate, onClose }) {
    const [project, setProject] = useState({
        projectId: '',
        title: '',
        description: '',
        type: '',
        privacy: '',
        teamMembers: [],
        goals: []
    });

    const [newMember, setNewMember] = useState('');
    const [newGoal, setNewGoal] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!project.title || !project.description || !project.type || !project.privacy) {
            setErrorMessage("All fields are mandatory!"); // Use setErrorMessage instead of an alert
            return;
        }
        const newProject = {
            ...project,
            projectId: uuidv4()
        };

        onProjectCreate(newProject);
        dispatch(addProject(newProject));  // Dispatch the action to add the project to Redux
        setErrorMessage(''); // Reset the error message.
    };

    const addMember = () => {
        if (newMember && !project.teamMembers.includes(newMember)) {
            setProject(prev => ({ ...prev, teamMembers: [...prev.teamMembers, newMember] }));
            setNewMember('');
        }
    };

    const removeMember = (member) => {
        setProject(prev => ({ ...prev, teamMembers: prev.teamMembers.filter(m => m !== member) }));
    };

    const addGoal = () => {
        if (newGoal && !project.goals.includes(newGoal)) {
            setProject(prev => ({ ...prev, goals: [...prev.goals, newGoal] }));
            setNewGoal('');
        }
    };

    const removeGoal = (goal) => {
        setProject(prev => ({ ...prev, goals: prev.goals.filter(g => g !== goal) }));
    };

    return (
        <div className="github-style-container">
            <h2>Create a New Project</h2>
            
            <form onSubmit={handleSubmit} className='project-container'>
                <div className="form-group">
                    <label>Project Title</label>
                    <input 
                        type="text" 
                        value={project.title}
                        onChange={(e) => setProject({...project, title: e.target.value})}
                        placeholder="e.g. My Awesome Project"
                    />
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <textarea 
                        value={project.description}
                        onChange={(e) => setProject({...project, description: e.target.value})}
                        placeholder="Short description of your project..."
                    ></textarea>
                </div>

                <div className="form-group">
                    <label>Type</label>
                    <select value={project.type} onChange={(e) => setProject({...project, type: e.target.value})}>
                        <option value="" disabled>Select Type</option>
                        <option value="visual">Visual Art</option>
                        <option value="music">Music</option>
                        <option value="writing">Writing</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Privacy</label>
                    <select value={project.privacy} onChange={(e) => setProject({...project, privacy: e.target.value})}>
                        <option value="" disabled>Select Privacy</option>
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Team Members</label>
                    <div className="team-input">
                        <input 
                            type="text" 
                            value={newMember}
                            onChange={(e) => setNewMember(e.target.value)} 
                            placeholder="Add member..."
                        />
                        <button type="button" onClick={addMember} className="secondary-btn">Add Member</button>
                    </div>
                    <ul>
                        {project.teamMembers.map(member => (
                            <li key={member}>
                                {member} 
                                <button type="button" onClick={() => removeMember(member)} className="remove-btn">Remove</button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="form-group">
                    <label>Project Goals</label>
                    <div className="goal-input">
                        <input 
                            type="text" 
                            value={newGoal}
                            onChange={(e) => setNewGoal(e.target.value)} 
                            placeholder="Add goal..."
                        />
                        <button type="button" onClick={addGoal} className="secondary-btn">Add Goal</button>
                    </div>
                    <ul>
                        {project.goals.map(goal => (
                            <li key={goal}>
                                {goal} 
                                <button type="button" onClick={() => removeGoal(goal)} className="remove-btn">Remove</button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="button-wrapper">
                    <button onClick={onClose} className="secondary-btn">Cancel</button>
                    <button type="submit" className="primary-btn">Create Project</button>
                </div>
            </form>

        </div>
    );
}

export default ProjectCreate;
