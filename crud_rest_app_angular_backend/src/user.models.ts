/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {

    @Prop()
    username: string;

    @Prop()
    password:string;

    @Prop({default:Date.now})
    joinDate: Date;

    @Prop()
    email:string;

    @Prop()
    customExercises: [];

    @Prop()
    customWorkouts: [];

    @Prop()
    exerciseHistory: [];

}

export type UserRegisterDocument = UserRegister & Document;
@Schema()
export class UserRegister {

    @Prop()
    username: string;

    @Prop()
    password:string;
    
    // @Prop()
    // description: string;

    @Prop()
    email:string;
    
    @Prop({default:Date.now})
    joinDate: Date;

    @Prop({default:[]})
    exerciseHistory: [];
}

export const UserSchema = SchemaFactory.createForClass(UserRegister);




export type exerciseDocument = Exercise & Document;
@Schema()
export class Exercise {

    @Prop()
    exerciseDate: Date;

    @Prop()
    exerciseType: string;

    @Prop()
    exercise:string;

    @Prop()
    bodyweightVariation:string;

    @Prop()
    setArray:[];

    @Prop()
    exerciseVolume: number;
    
}

export const exerciseSchema = SchemaFactory.createForClass(Exercise);


