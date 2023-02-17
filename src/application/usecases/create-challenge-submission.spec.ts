import { InMemoryChallengesRepository } from "../../../tests/repostories/in-memory-challenges-repository";
import { InMemoryStudentsRepository } from "../../../tests/repostories/in-memory-students-repository";
import { Challenge } from "../../domain/entities/challenge";
import { Student } from "../../domain/entities/student";
import { CreateChallengeSubmssion } from "./create-challenge-submission"

describe('create Challenge', () => {
    it('should be able to create a new challenge submission', async () => {
        const studentsRepository = new InMemoryStudentsRepository();
        const challengesRepository = new InMemoryChallengesRepository();

        const student = Student.create({
            name: 'Joe Doe',
            email: 'doe@gmail.com'
        })

        const challenge = Challenge.create({
            title: 'Challenge 01',
            instructionsUrl: 'http://example.com'
        })

        studentsRepository.items.push(student)
        challengesRepository.items.push(challenge)

        const sut = new CreateChallengeSubmssion(
            studentsRepository,
            challengesRepository
        );

        const response = sut.execute({
            studentId: student.id,
            challengeId: challenge.id
        })

        expect(response).toBeTruthy()
    })
})