import { CreateChallengeSubmssion } from "./create-challenge-submission"

describe('create Challenge', () => {
    it('should be able to create a new challenge submission', async () => {
        const sut = new CreateChallengeSubmssion();

        const response = sut.execute({
            studentId: "fake-student-id",
            challengeId: 'fake-challenge-id'
        })

        expect(response).toBeTruthy()
    })
})