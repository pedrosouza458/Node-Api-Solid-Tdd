import { Entity } from "../../core/domain/Entity";

type ChallengeProps = {
    title: string;
    instructionsUrl: string;
}

export class Challenge extends Entity<ChallengeProps>{
    private constructor(props: ChallengeProps, id?: string) {
        super(props, id);
    }

    public create(props: ChallengeProps, id?: string){
       const correction = new Challenge(props, id);
       return correction;
    }

}