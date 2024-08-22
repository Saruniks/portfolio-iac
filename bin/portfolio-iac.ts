#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { PortfolioIacStack } from '../lib/portfolio-iac-stack';

const app = new cdk.App();

new PortfolioIacStack(app, 'PortfolioIacStack');
