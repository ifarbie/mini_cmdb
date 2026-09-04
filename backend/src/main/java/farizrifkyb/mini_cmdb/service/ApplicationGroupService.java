package farizrifkyb.mini_cmdb.service;

import java.util.List;

import org.springframework.stereotype.Service;

import farizrifkyb.mini_cmdb.entity.Application;
import farizrifkyb.mini_cmdb.entity.ApplicationGroup;
import farizrifkyb.mini_cmdb.exception.ResourceNotFoundException;
import farizrifkyb.mini_cmdb.mapper.ApplicationGroupMapper;
import farizrifkyb.mini_cmdb.model.request.ApplicationGroupRequest;
import farizrifkyb.mini_cmdb.model.response.ApplicationGroupResponse;
import farizrifkyb.mini_cmdb.model.response.ApplicationGroupSimpleResponse;
import farizrifkyb.mini_cmdb.repository.ApplicationGroupRepository;
import farizrifkyb.mini_cmdb.repository.ApplicationRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ApplicationGroupService {

        private final ApplicationGroupRepository applicationGroupRepository;
        private final ApplicationRepository applicationRepository;

        private final ApplicationGroupMapper applicationGroupMapper;

        public ApplicationGroupSimpleResponse createApplicationGroup(Long applicationId, ApplicationGroupRequest req) {
                Application application = applicationRepository.findById(applicationId)
                                .orElseThrow(() -> new ResourceNotFoundException("Application Not Found"));

                ApplicationGroup group = new ApplicationGroup();

                group.setName(req.getName());
                group.setDescription(req.getDescription());
                group.setApplication(application);

                applicationGroupRepository.save(group);

                return applicationGroupMapper.toSimpleResponse(group);
        }

        public List<ApplicationGroupResponse> getApplicationGroups() {
                return applicationGroupRepository.findAll()
                                .stream()
                                .map(applicationGroupMapper::toResponse)
                                .toList();
        }

        public ApplicationGroupResponse getApplicationGroupById(Long groupId) {
                ApplicationGroup group = applicationGroupRepository.findById(groupId)
                                .orElseThrow(() -> new ResourceNotFoundException("Application Group Not Found"));

                return applicationGroupMapper.toResponse(group);
        }

        public ApplicationGroupSimpleResponse updateApplicationGroup(Long groupId, ApplicationGroupRequest req) {
                ApplicationGroup group = applicationGroupRepository.findById(groupId)
                                .orElseThrow(() -> new ResourceNotFoundException("Application Group Not Found"));

                group.setName(req.getName());
                group.setDescription(req.getDescription());

                applicationGroupRepository.save(group);

                return applicationGroupMapper.toSimpleResponse(group);
        }

        public String deleteApplicationGroup(Long groupId) {
                ApplicationGroup applicationGroup = applicationGroupRepository.findById(groupId)
                                .orElseThrow(() -> new ResourceNotFoundException("Application Group Not Found"));

                applicationGroupRepository.delete(applicationGroup);

                return "Berhasil menghapus data";
        }
}
