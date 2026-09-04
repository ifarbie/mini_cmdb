package farizrifkyb.mini_cmdb.mapper;

import org.springframework.stereotype.Component;

import farizrifkyb.mini_cmdb.entity.Application;
import farizrifkyb.mini_cmdb.model.request.ApplicationRequest;
import farizrifkyb.mini_cmdb.model.response.ApplicationResponse;
import farizrifkyb.mini_cmdb.model.response.ApplicationSimpleResponse;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class ApplicationMapper {

    private final ApplicationGroupMapper applicationGroupMapper;

    public ApplicationSimpleResponse toSimpleResponse(Application application) {
        return new ApplicationSimpleResponse(
                application.getId(),
                application.getName(),
                application.getStatus(),
                application.getDescription(),
                application.getEnvironment());
    }

    public ApplicationResponse toResponse(Application application) {
        return new ApplicationResponse(
                application.getId(),
                application.getName(),
                application.getStatus(),
                application.getDescription(),
                application.getEnvironment(),
                application.getGroups()
                        .stream()
                        .map(applicationGroupMapper::toResponse)
                        .toList());
    }

    public Application toEntity(ApplicationRequest req) {
        Application newApplication = new Application();

        newApplication.setName(req.getName());
        newApplication.setEnvironment(req.getEnvironment());
        newApplication.setStatus(req.getStatus());
        newApplication.setDescription(req.getDescription());

        return newApplication;
    }

    public void updateEntity(Application application, ApplicationRequest req) {
        application.setName(req.getName());
        application.setEnvironment(req.getEnvironment());
        application.setStatus(req.getStatus());
        application.setDescription(req.getDescription());
    }
}