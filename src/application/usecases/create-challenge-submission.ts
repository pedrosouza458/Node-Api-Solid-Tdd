import { Submission } from "../../domain/entities/submission";

type CreateChallengeSubmssionRequest = {
    studentId: string;
    challengeId: string;
}

export class CreateChallengeSubmssion {
    async execute({studentId, challengeId}: CreateChallengeSubmssionRequest){
      const submssion = Submission.create({
        studentId,
        challengeId
      })
      return submssion
    }
}