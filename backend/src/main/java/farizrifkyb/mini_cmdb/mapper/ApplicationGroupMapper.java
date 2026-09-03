package farizrifkyb.mini_cmdb.mapper;

import org.springframework.stereotype.Component;

import farizrifkyb.mini_cmdb.entity.ApplicationGroup;
import farizrifkyb.mini_cmdb.model.response.ApplicationGroupResponse;
import farizrifkyb.mini_cmdb.model.response.ApplicationGroupSimpleResponse;
import farizrifkyb.mini_cmdb.model.response.ApplicationSimpleResponse;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class ApplicationGroupMapper {

    private final IpMapper ipMapper;

    public ApplicationGroupResponse toResponse(ApplicationGroup group) {
        return new ApplicationGroupResponse(
                group.getId(),
                group.getName(),
                group.getDescription(),
                new ApplicationSimpleResponse(
                        group.getApplication().getId(),
                        group.getApplication().getName(),
                        group.getApplication().getStatus(),
                        group.getApplication().getDescription(),
                        group.getApplication().getEnvironment()
                ),
                group.getIps()
                        .stream()
                        .map(ipMapper::toSimpleResponse)
                        .toList()
        );
    }

    public ApplicationGroupSimpleResponse toSimpleResponse(ApplicationGroup group) {
        return new ApplicationGroupSimpleResponse(
                group.getId(),
                group.getName(),
                group.getDescription()
        );
    }
}