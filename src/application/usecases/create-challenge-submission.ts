import { Submission } from "../../domain/entities/submission";

type CreateChallengeSubmssionRequest = {
    studentId: string;
    challengeId: string;
}

class CreateChallengeSubmssion {
    execute({studentId, challengeId}: CreateChallengeSubmssionRequest){
      const submssion = Submission.create({
        studentId,
        challengeId
      })
      return submssion
    }
}