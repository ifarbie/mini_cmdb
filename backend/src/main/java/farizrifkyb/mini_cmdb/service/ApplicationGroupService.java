package farizrifkyb.mini_cmdb.service;

import java.util.List;

import org.springframework.stereotype.Service;

import farizrifkyb.mini_cmdb.entity.Application;
import farizrifkyb.mini_cmdb.entity.ApplicationGroup;
import farizrifkyb.mini_cmdb.model.request.ApplicationGroupRequest;
import farizrifkyb.mini_cmdb.model.response.ApplicationGroupResponse;
import farizrifkyb.mini_cmdb.model.response.ApplicationResponse;
import farizrifkyb.mini_cmdb.repository.ApplicationGroupRepository;
import farizrifkyb.mini_cmdb.repository.ApplicationRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ApplicationGroupService {
    private final ApplicationGroupRepository applicationGroupRepository;
    private final ApplicationRepository applicationRepository;

    public ApplicationGroup createApplicationGroup(Long applicationId, ApplicationGroupRequest req) {
        Application application = applicationRepository.findById(applicationId)
                .orElseThrow(() -> new RuntimeException("Application not found"));

        ApplicationGroup group = new ApplicationGroup();

        group.setName(req.getName());
        group.setDescription(req.getDescription());
        group.setApplication(application);

        applicationGroupRepository.save(group);

        return group;
    }

    public List<ApplicationGroupResponse> getApplicationGroups() {
        return applicationGroupRepository.findAll()
                .stream()
                .map(group -> new ApplicationGroupResponse(
                        group.getId(),
                        group.getName(),
                        group.getDescription(),
                        new ApplicationResponse(
                                group.getApplication().getId(),
                                group.getApplication().getName(),
                                group.getApplication().getStatus(),
                                group.getApplication().getDescription(),
                                group.getApplication().getEnvironment())))
                .toList();
    }

    public ApplicationGroupResponse updateApplicationGroup(Long groupId, ApplicationGroupRequest req) {
        ApplicationGroup group = applicationGroupRepository.findById(groupId)
                .orElseThrow(() -> new RuntimeException("Application Group not found"));

        group.setName(req.getName());
        group.setDescription(req.getDescription());

        applicationGroupRepository.save(group);

        return new ApplicationGroupResponse(
                group.getId(),
                group.getName(),
                group.getDescription(),
                new ApplicationResponse(
                        group.getApplication().getId(),
                        group.getApplication().getName(),
                        group.getApplication().getStatus(),
                        group.getApplication().getDescription(),
                        group.getApplication().getEnvironment()));
    }

    public String deleteApplicationGroup(Long groupId) {
        ApplicationGroup applicationGroup = applicationGroupRepository.findById(groupId)
                .orElseThrow(() -> new RuntimeException("Application Group not found"));

        applicationGroupRepository.delete(applicationGroup);

        return "Berhasil menghapus data";
    }
}
