// @vitest-environment jsdom
import { fireEvent, render, screen, within } from '@testing-library/react'
import { beforeAll, expect, test, vi } from 'vitest'
import App from './App'

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: () => ({ matches: false, addListener: () => {}, removeListener: () => {} }),
  })
  HTMLElement.prototype.scrollIntoView = vi.fn()
})

test('the complete journey opens and its main interactions respond', () => {
  const { container } = render(<App />)
  const section = (id: string) => within(container.querySelector(`#${id}`) as HTMLElement)

  expect(screen.getByRole('heading', { name: 'Hey, Ammu. ❤️' })).toBeTruthy()
  fireEvent.click(screen.getByRole('button', { name: 'Open a little note from Nandu' }))
  expect(screen.getByRole('region', { name: 'A little note from Nandu' }).textContent).toContain('Seeing us together')
  fireEvent.click(screen.getByRole('button', { name: /Back to our little universe/ }))
  expect(screen.queryByRole('region', { name: 'A little note from Nandu' })).toBeNull()
  fireEvent.click(screen.getByRole('button', { name: /Come see my world/ }))
  expect(container.querySelector('.hero')?.classList.contains('world-entered')).toBe(true)

  fireEvent.click(screen.getByRole('button', { name: /Open navigation/ }))
  expect(screen.getByRole('navigation', { name: 'Story sections' }).querySelectorAll('a')).toHaveLength(10)
  fireEvent.click(screen.getByRole('link', { name: /A letter/ }))
  expect(HTMLElement.prototype.scrollIntoView).toHaveBeenCalled()
  expect(screen.getByRole('button', { name: /Open navigation/ })).toBeTruthy()

  fireEvent.click(section('laugh').getByRole('button', { name: /Generate a very official report/ }))
  expect(section('laugh').getByText(/the extremely official report/i)).toBeTruthy()
  fireEvent.click(section('reasons').getByRole('button', { name: /One more reason/ }))
  expect(section('reasons').getByText(/Because/)).toBeTruthy()

  fireEvent.click(section('scrapbook').getByRole('button', { name: /Open memory page: How our story began/ }))
  expect((container.querySelector('.memory-detail-image img') as HTMLImageElement).getAttribute('src')).toBe('/photos/how-our-story-began.webp')
  expect(section('scrapbook').getByText(/I hold this little moment close/)).toBeTruthy()
  fireEvent.click(section('anniversary').getByRole('button', { name: /Maybe we can make a new memory/ }))
  expect(section('anniversary').getByText(/No perfect plan needed/)).toBeTruthy()

  fireEvent.click(section('safe').getByRole('button', { name: /Open the glowing door/ }))
  expect(section('safe').getByRole('heading', { name: /feel safe being honest with me/ })).toBeTruthy()
  fireEvent.click(section('safe').getByRole('button', { name: /Dim the lamp/ }))
  expect(section('safe').getByRole('button', { name: /Light the lamp/ })).toBeTruthy()
  fireEvent.click(section('safe').getByRole('button', { name: /Outside the little house/ }))
  fireEvent.click(section('safe').getByRole('button', { name: /Step inside the little house/ }))
  expect(section('safe').getByRole('heading', { name: /feel safe being honest with me/ })).toBeTruthy()

  fireEvent.click(section('letter').getByRole('button', { name: 'Open the letter' }))
  expect(section('letter').getByText('My Ammu,')).toBeTruthy()
  fireEvent.click(section('finale').getByRole('button', { name: /Send one little hug/ }))
  expect(section('finale').getByText(/Hug sent with love/)).toBeTruthy()
})
