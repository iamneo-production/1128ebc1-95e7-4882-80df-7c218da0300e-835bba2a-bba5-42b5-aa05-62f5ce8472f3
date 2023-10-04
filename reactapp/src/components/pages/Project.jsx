import React, { useState } from 'react';
import ProjectCreate from './ProjectCreate';
import ProjectView from './ProjectView';
import { useSelector, useDispatch } from 'react-redux';
import { addProject, clearProjects } from '../Redux/ProjectSlice'; // Adjust the path based on your directory structure
import noProjectsImage from '../../assets/images/noProject.png'; 
import '../../assets/css/Project.css';

function Project() {
    const projectsFromRedux = useSelector(state => state.project.projects);
    const dispatch = useDispatch();

    const [showCreateForm, setShowCreateForm] = useState(false);

    const handleProjectCreate = (project) => {
        setShowCreateForm(false);
    };
    const handleClearProjects = () => {
        dispatch(clearProjects());
    };

    return (
        <div className='project-comp'>
            
            <button onClick={() => setShowCreateForm(true)} className="create-project-btn">
                Create Project
            </button>
            {showCreateForm && 
                <ProjectCreate 
                    onProjectCreate={handleProjectCreate}
                    onClose={() => setShowCreateForm(false)}
                />
            }
            {!showCreateForm && 
                projectsFromRedux.map((project, index) => (
                    <ProjectView key={index} project={project} />
                ))
            }
            {projectsFromRedux.length === 0 && !showCreateForm &&
               <div className="no-projects">
                   <img src={noProjectsImage} alt="No projects" />
                   <p>No projects have been assigned</p>
               </div>
            }
              {projectsFromRedux.length > 0 && 
                <button onClick={handleClearProjects} className="clear-projects-btn">
                    Clear All Projects
                </button>
            }
        </div>
    );
}

export default Project;
