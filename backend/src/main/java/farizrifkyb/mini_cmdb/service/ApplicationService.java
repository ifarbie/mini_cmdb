package farizrifkyb.mini_cmdb.service;

import java.util.List;

import org.springframework.stereotype.Service;

import farizrifkyb.mini_cmdb.entity.Application;
import farizrifkyb.mini_cmdb.exception.ResourceNotFoundException;
import farizrifkyb.mini_cmdb.mapper.ApplicationMapper;
import farizrifkyb.mini_cmdb.model.request.ApplicationRequest;
import farizrifkyb.mini_cmdb.model.response.ApplicationResponse;
import farizrifkyb.mini_cmdb.model.response.ApplicationSimpleResponse;
import farizrifkyb.mini_cmdb.repository.ApplicationRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ApplicationService {

    private final ApplicationRepository applicationRepository;

    private final ApplicationMapper applicationMapper;

    public List<ApplicationResponse> getApplications() {
        return applicationRepository.findAll().stream().map(applicationMapper::toResponse).toList();
    }

    public ApplicationResponse getApplicationById(Long id) {
        Application application = applicationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Application Not Found"));
                
        return applicationMapper.toResponse(application);
    }

    public ApplicationSimpleResponse createApplication(ApplicationRequest req) {
        Application newApplication = applicationMapper.toEntity(req);

        applicationRepository.save(newApplication);

        return applicationMapper.toSimpleResponse(newApplication);
    }

    public ApplicationSimpleResponse updateApplication(Long id, ApplicationRequest req) {
        Application application = applicationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Application Not Found"));

        applicationMapper.updateEntity(application, req);

        applicationRepository.save(application);

        return applicationMapper.toSimpleResponse(application);
    }

    public String deleteApplication(Long id) {
        Application application = applicationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Application Not Found"));

        applicationRepository.delete(application);

        return "Berhasil menghapus data";
    }
}
