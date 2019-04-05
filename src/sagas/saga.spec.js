import { 
    watchAgeUp, 
    watchAgeDown,
    ageDownAsync,
    ageUpAsync
} from './saga'



describe('watchAgeUp', () => {
    it('call function', () => {
        const gen = watchAgeUp()
        gen.next()
        expect(gen.next().done).toBeTruthy()
    })
})
