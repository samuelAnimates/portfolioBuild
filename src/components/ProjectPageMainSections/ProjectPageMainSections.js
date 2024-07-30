import React from "react";
import "./ProjectPageMainSections.css";
import ProjectPageHighlights from '../ProjectPageHighlights';
import ProjectPageOverview from '../ProjectPageOverview';
import ProjectPageSynopsis from '../ProjectPageSynopsis';

const ProjectPageMainSections = props => (
	<div className="display-flex flex-direction-column">
		{ props.isMobile === false &&
			<div className="display-flex flex-direction-row">
				<ProjectPageSynopsis
					colorSchemeSuffix={ props.colorSchemeSuffix }
					doNotTrack={ props.doNotTrack }
					isMobile={ props.isMobile }
					ref={ props.synopsisSectionRef }
					synopsis={ props.projectInfo.synopsis }
					width={ props.width }
				/>
				<ProjectPageHighlights
					colorSchemeSuffix={ props.colorSchemeSuffix }
					highlights={ props.projectInfo.highlights }
					isMobile={ props.isMobile }
					ref={ props.highlightsSectionRef }
					synopsis={ props.projectInfo.synopsis }
					width={ props.width }
				/>
			</div>
		}
		{ props.isMobile === true &&
			<div className="display-flex flex-direction-column">
				<ProjectPageSynopsis
					colorSchemeSuffix={ props.colorSchemeSuffix }
					doNotTrack={ props.doNotTrack }
					isMobile={ props.isMobile }
					ref={ props.synopsisSectionRef }
					synopsis={ props.projectInfo.synopsis }
					width={ props.width }
				/>
				<ProjectPageHighlights
					colorSchemeSuffix={ props.colorSchemeSuffix }
					highlights={ props.projectInfo.highlights }
					isMobile={ props.isMobile }
					ref={ props.highlightsSectionRef }
					synopsis={ props.projectInfo.synopsis }
					width={ props.width }
				/>
			</div>
		}		
		<ProjectPageOverview
			colorSchemeSuffix={ props.colorSchemeSuffix }
			overview={ props.projectInfo.overview }
			ref={ props.overviewSectionRef }
		/>
	</div>
);

export default ProjectPageMainSections;