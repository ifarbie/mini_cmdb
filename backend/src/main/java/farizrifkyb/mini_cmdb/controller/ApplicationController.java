package farizrifkyb.mini_cmdb.controller;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import farizrifkyb.mini_cmdb.entity.Application;
import farizrifkyb.mini_cmdb.model.request.ApplicationRequest;
import farizrifkyb.mini_cmdb.model.response.WebResponse;
import farizrifkyb.mini_cmdb.service.ApplicationService;
import jakarta.validation.Valid;

@RestController
public class ApplicationController {

    private final ApplicationService applicationService;

    public ApplicationController(ApplicationService applicationService) {
        this.applicationService = applicationService;
    }

    @PostMapping(path = "/api/applications", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public WebResponse<Application> createApplication(@RequestBody @Valid ApplicationRequest req) {
        Application newApplication = applicationService.createApplication(req);
        return WebResponse.<Application>builder().data(newApplication).build();
    }

    @GetMapping(path = "/api/applications", produces = MediaType.APPLICATION_JSON_VALUE)
    public WebResponse<List<Application>> getApplications() {
        List<Application> listApplications = applicationService.getApplications();
        return WebResponse.<List<Application>>builder().data(listApplications).build();
    }

    @GetMapping(path = "/api/applications/{application_id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public WebResponse<Application> getApplicationById(@PathVariable("application_id") Long applicationId) {
        Application application = applicationService.getApplicationById(applicationId);
        return WebResponse.<Application>builder().data(application).build();
    }

    @PutMapping(path = "/api/applications/{id}", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public WebResponse<Application> updateApplication(@PathVariable("id") Long id,
            @RequestBody @Valid ApplicationRequest req) {
        Application updatedApplication = applicationService.updateApplication(id, req);
        return WebResponse.<Application>builder().data(updatedApplication).build();
    }

    @DeleteMapping(path = "/api/applications/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public WebResponse<String> deleteApplication(@PathVariable("id") Long id) {
        String response = applicationService.deleteApplication(id);
        return WebResponse.<String>builder().data(response).build();
    }
}
