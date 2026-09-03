package farizrifkyb.mini_cmdb.mapper;

import org.springframework.stereotype.Component;

import farizrifkyb.mini_cmdb.entity.Application;
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
                application.getEnvironment()
        );
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
                        .toList()
        );
    }
}