import { render, screen } from '@testing-library/react';
import Post from '../components/Post';

test('renders post title', () => {
  render(<Post />);
  const title = screen.getByText(/sample post/i);
  expect(title).toBeInTheDocument();
});
