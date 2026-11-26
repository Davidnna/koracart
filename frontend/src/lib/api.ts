const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '')

export async function getApiHealth() {
  if (!API_BASE_URL) {
    throw new Error('The API URL has not been configured yet.')
  }

  const response = await fetch(`${API_BASE_URL}/health/`, {
    headers: { Accept: 'application/json' },
  })

  if (!response.ok) {
    throw new Error(`API returned ${response.status}`)
  }

  return response.json() as Promise<{
    status: string
    service: string
    message: string
  }>
}
