import { IsOptional, IsString } from "class-validator";
import { Column } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

export class Localized {
    @Column({ nullable: true })
    @ApiProperty()
    @IsString()
    ar: string;
    @ApiProperty()
    @Column({ nullable: true })
    @IsString()
    @IsOptional()
    en?: string;


    constructor() {
        if (this.ar === null && this.en !== null)
            this.ar = this.en

        if (this.en === null && this.ar !== null)
            this.en = this.ar;
    }
}