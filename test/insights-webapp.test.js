"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("aws-cdk-lib");
const assertions_1 = require("aws-cdk-lib/assertions");
const InsightsWebapp = require("../lib/insights-webapp-stack");
const build_config_1 = require("../lib/build-config");
test('S3 Buckets Created', () => {
    const app = new cdk.App();
    const buildConfig = (0, build_config_1.getConfig)(app);
    // WHEN
    const stack = new InsightsWebapp.InsightsWebappStack(app, 'MyTestStack', buildConfig);
    // THEN
    const template = assertions_1.Template.fromStack(stack);
    template.resourceCountIs('AWS::S3::Bucket', 2);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zaWdodHMtd2ViYXBwLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnNpZ2h0cy13ZWJhcHAudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFtQztBQUNuQyx1REFBeUQ7QUFDekQsK0RBQStEO0FBQy9ELHNEQUFnRDtBQUVoRCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxFQUFFO0lBQzlCLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzFCLE1BQU0sV0FBVyxHQUFHLElBQUEsd0JBQVMsRUFBQyxHQUFHLENBQUMsQ0FBQztJQUNuQyxPQUFPO0lBQ1AsTUFBTSxLQUFLLEdBQUcsSUFBSSxjQUFjLENBQUMsbUJBQW1CLENBQUMsR0FBRyxFQUFFLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN0RixPQUFPO0lBRVAsTUFBTSxRQUFRLEdBQUcscUJBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFM0MsUUFBUSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNqRCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgeyBUZW1wbGF0ZSwgTWF0Y2ggfSBmcm9tICdhd3MtY2RrLWxpYi9hc3NlcnRpb25zJztcbmltcG9ydCAqIGFzIEluc2lnaHRzV2ViYXBwIGZyb20gJy4uL2xpYi9pbnNpZ2h0cy13ZWJhcHAtc3RhY2snO1xuaW1wb3J0IHsgZ2V0Q29uZmlnIH0gZnJvbSAnLi4vbGliL2J1aWxkLWNvbmZpZyc7XG5cbnRlc3QoJ1MzIEJ1Y2tldHMgQ3JlYXRlZCcsICgpID0+IHtcbiAgY29uc3QgYXBwID0gbmV3IGNkay5BcHAoKTtcbiAgY29uc3QgYnVpbGRDb25maWcgPSBnZXRDb25maWcoYXBwKTtcbiAgLy8gV0hFTlxuICBjb25zdCBzdGFjayA9IG5ldyBJbnNpZ2h0c1dlYmFwcC5JbnNpZ2h0c1dlYmFwcFN0YWNrKGFwcCwgJ015VGVzdFN0YWNrJywgYnVpbGRDb25maWcpO1xuICAvLyBUSEVOXG5cbiAgY29uc3QgdGVtcGxhdGUgPSBUZW1wbGF0ZS5mcm9tU3RhY2soc3RhY2spO1xuXG4gIHRlbXBsYXRlLnJlc291cmNlQ291bnRJcygnQVdTOjpTMzo6QnVja2V0JywgMik7XG59KTtcbiJdfQ==