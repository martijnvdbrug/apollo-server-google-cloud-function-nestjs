import {DocumentNode} from 'graphql';
import {Module} from '@nestjs/common';
import { TeslaModule } from './tesla/tesla.module';
import * as fs from 'fs';
import glob = require('glob');
import {TeslaResolver} from './tesla/tesla.resolver';

@Module({
  imports: [
    TeslaModule
  ],
  providers: []
})
export class AppModule {

  typeDefs: Array<DocumentNode> = [];
  resolvers: any = [];

  // All schemas from all modules should be merged into 1 typeDefs, resolvers and optional Directives
  constructor(private teslaResolver: TeslaResolver) {
    this.resolvers.push(teslaResolver.resolvers);
    this.typeDefs = <any>this.getAllTypeDefs();
  }

  /**
   * Get all files ending in .graphql
   */
  getAllTypeDefs(): string[] {
    const typeDefs = [];
    const files = glob.sync('dist/**/*.graphql');
    files.forEach(file => {
      typeDefs.push(fs.readFileSync(file).toString());
    });
    return typeDefs;
  }

}
