import {gql} from '@apollo/client'

export const LOAD_USERS = gql`
    query {
        events {
        id
        name
        event_type
        permission
        start_time
        end_time
        description
        speakers {
            name
            profile_pic
        }
        public_url
        private_url
        related_events
        }
    }
`