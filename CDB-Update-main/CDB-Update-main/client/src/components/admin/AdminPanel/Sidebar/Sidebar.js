import React from 'react'
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

export default function Sidebar() {
  return (
    <div>
        <Navigation
            activeItemId="/management/members"
            onSelect={({itemId}) => {
            }}
            items={[
              {
                title: 'Dashboard',
                itemId: '/dashboard',
              },
              {
                title: 'Jobs Management',
                itemId: '/management',
                // elemBefore: () => <Icon name="users" />,
                subNav: [
                  {
                    title: 'Add Job',
                    itemId: '/management/projects',
                  },
                  {
                    title: 'View jobs',
                    itemId: '/management/members',
                  },
                  {
                    title: 'View Applicants',
                    itemId: '/management/members',
                  },
                ],
              },
              {
                title: 'Another Item',
                itemId: '/another',
                subNav: [
                  {
                    title: 'Teams',
                    itemId: '/management/teams',
                  },
                ],
              },
            ]}
          />

    </div>
  )
}
