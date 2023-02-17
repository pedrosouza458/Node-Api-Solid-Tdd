import { Submission } from "../../domain/entities/submission";
import { StudentsRepository } from "../respositories/StudentsRepository";

type CreateChallengeSubmssionRequest = {
    studentId: string;
    challengeId: string;
}
export class CreateChallengeSubmssion {

  constructor(
    private studentsRepository: StudentsRepository
  ) {}

    async execute({studentId, challengeId}: CreateChallengeSubmssionRequest){
      const submssion = Submission.create({
        studentId,
        challengeId
      })
      return submssion
    }
}