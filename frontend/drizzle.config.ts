import { connectionUri } from '@/db/db'
import type {Config} from 'drizzle-kit'
export default{
    out:'./src/db/drizzle',
    schema:'./src/db/schema/*.ts', driver: "mysql2",
    dbCredentials: {
      uri: connectionUri|| "",
    },
} satisfies Config