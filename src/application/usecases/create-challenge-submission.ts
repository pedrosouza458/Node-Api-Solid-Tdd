import { Submission } from "../../domain/entities/submission";
import { ChallengesRepository } from "../respositories/ChallengesRepository";
import { StudentsRepository } from "../respositories/StudentsRepository";

type CreateChallengeSubmssionRequest = {
    studentId: string;
    challengeId: string;
}
export class CreateChallengeSubmssion {

  constructor(
    private studentsRepository: StudentsRepository,
    private challengeRepository: ChallengesRepository
  ) {}

    async execute({studentId, challengeId}: CreateChallengeSubmssionRequest){

      const student = this.studentsRepository.findById(studentId)

      if(!student){
        throw new Error('Student does not exist')
      }

      const submssion = Submission.create({
        studentId,
        challengeId
      })
      return submssion
    }
}