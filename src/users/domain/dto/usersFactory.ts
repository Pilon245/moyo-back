import { IsBoolean, Length, Matches, Validate } from 'class-validator';
import { Transform, TransformFnParams } from 'class-transformer';

export class CreateUserInputModel {
  @Matches(/^[a-zA-Z0-9_-]*$/)
  @Length(3, 10)
  @Transform(({ value }: TransformFnParams) => value?.trim())
  login: string;
  @Length(6, 20)
  @Transform(({ value }: TransformFnParams) => value?.trim())
  password: string;
  @Matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
  @Transform(({ value }: TransformFnParams) => value?.trim())
  email: string;
}

export class BanUserInputModel {
  @IsBoolean()
  isBanned: boolean;
  @Length(20)
  banReason: string;
}

export class BanBloggerUsersInputModel {
  @IsBoolean()
  isBanned: boolean;
  @Length(20)
  banReason: string;
  // @Validate(BlogExistsRule)
  blogId: string;
}

export class UsersFactory {
  constructor(
    public id: string,
    public login: string,
    public email: string,
    public passwordHash: string,
    public createdAt: string,
    public confirmationCode: string,
  ) {}
}
export class BanUsersFactory {
  constructor(
    public id: string,
    public isBanned: boolean,
    public banDate: string,
    public banReason: string,
  ) {}
}
export class BanBloggerUsersFactory {
  constructor(
    public id: string,
    public blogId: string,
    public bloggerId: string,
    public login: string,
  ) {}
}
export class CreateUserUseCaseDto {
  login: string;
  password: string;
  email: string;
}
export class BanAdminUserUseCaseDto {
  id: string;
  isBanned: boolean;
  banReason: string;
}
export class BanBloggerUserUseCaseDto {
  banUserId: string;
  bloggerId: string;
  isBanned: boolean;
  banReason: string;
  blogId: string;
}
