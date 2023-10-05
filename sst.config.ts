import { SSTConfig } from 'sst';
import { NextjsSite } from 'sst/constructs';
import { Certificate } from 'aws-cdk-lib/aws-certificatemanager';

export default {
  config(_input) {
    return {
      name: 'bolt-abacus',
      region: 'ap-south-1',
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const certArn = process.env.CERTIFICATE_ARN!;
      const site = new NextjsSite(stack, 'site', {
        environment: {
          BACKEND_URL: process.env.BACKEND_URL!,
        },
        customDomain: {
          isExternalDomain: true,
          domainName: 'boltabacus.com',
          cdk: {
            certificate: Certificate.fromCertificateArn(
              stack,
              'MyCert',
              certArn
            ),
          },
        },
      });

      stack.addOutputs({
        SiteUrl: site.customDomainUrl || site.url,
      });
    });
  },
} satisfies SSTConfig;
