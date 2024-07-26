import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ypwcudwnsnqtuytinvao.supabase.co"
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlwd2N1ZHduc25xdHV5dGludmFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI3OTM5NjAsImV4cCI6MjAwODM2OTk2MH0.yum2ImHAmhuyY4SbyBJMZ8xaGkc-y9sKXh0A85OOtms'

export const supabase = createClient(supabaseUrl, supabaseKey)