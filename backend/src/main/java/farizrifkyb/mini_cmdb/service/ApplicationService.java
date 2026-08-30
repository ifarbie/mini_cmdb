package farizrifkyb.mini_cmdb.service;

import java.util.List;

import org.springframework.stereotype.Service;

import farizrifkyb.mini_cmdb.entity.Application;
import farizrifkyb.mini_cmdb.model.request.ApplicationRequest;
import farizrifkyb.mini_cmdb.repository.ApplicationRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ApplicationService {

    private final ApplicationRepository applicationRepository;

    public List<Application> getApplications() {
        return applicationRepository.findAll();
    }

    public Application getApplicationById(Long id) {
        return applicationRepository.findById(id).orElseThrow(() -> new RuntimeException("Application not found"));
    }

    public Application createApplication(ApplicationRequest req) {
        Application newApplication = new Application();

        newApplication.setName(req.getName());
        newApplication.setEnvironment(req.getEnvironment());
        newApplication.setStatus(req.getStatus());
        newApplication.setDescription(req.getDescription());

        applicationRepository.save(newApplication);

        return newApplication;
    }

    public Application updateApplication(Long id, ApplicationRequest req) {
        Application application = applicationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Application not found"));

        application.setName(req.getName());
        application.setEnvironment(req.getEnvironment());
        application.setStatus(req.getStatus());
        application.setDescription(req.getDescription());

        applicationRepository.save(application);

        return application;
    }

    public String deleteApplication(Long id) {
        Application application = applicationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Application not found"));

        applicationRepository.delete(application);

        return "Berhasil menghapus data";
    }
}
