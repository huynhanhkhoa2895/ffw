import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import MovieDetail from "../components/molecules/MovieDetail";

describe('Movie Detail Component', () => {
    it('renders detail', () => {
        const mockValue = {
            title: 'test',
            poster_path: '/path',
            release_date: '2023-06-08',
            popularity: 56789,
            genres: ['genres1','genres2','genres3'],
            overview: 'overview',
            imdb_id: 123456
        }
        render(<MovieDetail movie={mockValue} />)

        expect(screen.getByTestId('title',mockValue.title)).toBeInTheDocument()
        expect(screen.getByTestId('release',mockValue.release_date)).toBeInTheDocument()
        expect(screen.getByTestId('popularity',mockValue.popularity)).toBeInTheDocument()
        mockValue.genres.map((genre)=>{
            expect(screen.getByTestId('genres',genre)).toBeInTheDocument()
        })

    })
})
