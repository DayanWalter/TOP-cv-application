import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiEmailOutline } from '@mdi/js';
import { mdiPhone } from '@mdi/js';
import { mdiMapMarker } from '@mdi/js';

export default function CV({ person, education }) {
  return (
    <div className="cv">
      <div className="head">
        <div className="top">
          <h1>{person.fullname}</h1>
        </div>
        <div className="bottom">
          <div className="email">
            <Icon path={mdiEmailOutline} size="24px" />:<h2>{person.email}</h2>
          </div>

          <div className="phone">
            <Icon path={mdiPhone} size="24px" />: <h2>{person.phoneNumber}</h2>
          </div>

          <div className="location">
            <Icon path={mdiMapMarker} size="24px" />:<h2>{person.adress}</h2>
          </div>
        </div>
      </div>
      <div className="body">
        <h1>Education</h1>
        <li>
          <div className="dateLocation">
            <div className="date">
              <p className="startDate">{education.startDate}</p>-
              <p className="endDate">{education.endDate}</p>
            </div>
            <div className="location">
              <p>{education.location}</p>
            </div>
          </div>

          <div className="schoolDegree">
            <div className="school">
              <p>{education.school}</p>
            </div>
            <div className="degree">{education.degree}</div>
          </div>
        </li>

        <h1>Professional Experience</h1>
        <li>
          <div className="dateLocation">
            <div className="date">
              <p className="startDate">10/2020</p>-
              <p className="endDate">11/2020</p>
            </div>
            <div className="location">
              <p>Berlin, Germany</p>
            </div>
          </div>
          <div className="companyPositionDescription">
            <div className="company">
              <p>Umbrella Inc.</p>
            </div>
            <div className="position">UX & UI Designer</div>
            <div className="description">
              Designed and prototyped user interface patterns for various
              clients in various industries, ranging from self-service apps
              within the telecommunications-sector to mobile games for IOS and
              Android
            </div>
          </div>
        </li>
        <li>
          <div className="dateLocation">
            <div className="date">
              <p className="startDate">10/2020</p>-
              <p className="endDate">11/2020</p>
            </div>
            <div className="location">
              <p>Berlin, Germany</p>
            </div>
          </div>
          <div className="companyPositionDescription">
            <div className="company">
              <p>Umbrella Inc.</p>
            </div>
            <div className="position">UX & UI Designer</div>
            <div className="description">
              Designed and prototyped user interface patterns for various
              clients in various industries, ranging from self-service apps
              within the telecommunications-sector to mobile games for IOS and
              Android
            </div>
          </div>
        </li>
        <li>
          <div className="dateLocation">
            <div className="date">
              <p className="startDate">10/2020</p>-
              <p className="endDate">11/2020</p>
            </div>
            <div className="location">
              <p>Berlin, Germany</p>
            </div>
          </div>
          <div className="companyPositionDescription">
            <div className="company">
              <p>Umbrella Inc.</p>
            </div>
            <div className="position">UX & UI Designer</div>
            <div className="description">
              Designed and prototyped user interface patterns for various
              clients in various industries, ranging from self-service apps
              within the telecommunications-sector to mobile games for IOS and
              Android
            </div>
          </div>
        </li>
      </div>
    </div>
  );
}
