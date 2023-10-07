import Icon from '@mdi/react';
import { mdiEmailOutline } from '@mdi/js';
import { mdiPhone } from '@mdi/js';
import { mdiMapMarker } from '@mdi/js';

export default function CV({ person, educationArray, experienceArray }) {
  return (
    <div className="cv">
      <div className="head">
        <div className="top">
          <h1>{person.fullname}</h1>
        </div>
        <div className="bottom">
          <div className="email">
            <Icon path={mdiEmailOutline} size="24px" /> <h2>{person.email}</h2>
          </div>

          <div className="phone">
            <Icon path={mdiPhone} size="24px" /> <h2>{person.phoneNumber}</h2>
          </div>

          <div className="location">
            <Icon path={mdiMapMarker} size="24px" /> <h2>{person.adress}</h2>
          </div>
        </div>
      </div>
      <div className="body">
        <h1>Education</h1>
        {educationArray.map((entry) => (
          <li key={entry.id}>
            <div className="dateLocation">
              <div className="date">
                <p className="startDate">{entry.startDate}</p>-
                <p className="endDate">{entry.endDate}</p>
                {}
              </div>
              <div className="location">
                <p>{entry.location}</p>
              </div>
            </div>

            <div className="schoolDegree">
              <div className="school">
                <p>{entry.school}</p>
              </div>
              <div className="degree">{entry.degree}</div>
            </div>
          </li>
        ))}
        <h1>Professional Experience</h1>
        {experienceArray.map((entry) => (
          <li key={entry.id}>
            <div className="dateLocation">
              <div className="date">
                <p className="startDate">{entry.startDate}</p>
                {'-'}
                <p className="endDate">{entry.endDate}</p>
              </div>
              <div className="location">
                <p>{entry.location}</p>
              </div>
            </div>
            <div className="companyPositionDescription">
              <div className="company">
                <p>{entry.company}</p>
              </div>
              <div className="position">{entry.position}</div>
              <div className="description">{entry.description}</div>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}
