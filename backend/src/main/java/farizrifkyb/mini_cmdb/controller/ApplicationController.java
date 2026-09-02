package farizrifkyb.mini_cmdb.controller;

import java.util.List;

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

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class ApplicationController {

    private final ApplicationService applicationService;

    @PostMapping("/api/applications")
    public WebResponse<Application> createApplication(@RequestBody @Valid ApplicationRequest req) {
        return WebResponse.<Application>builder().data(applicationService.createApplication(req)).build();
    }

    @GetMapping("/api/applications")
    public WebResponse<List<Application>> getApplications() {
        return WebResponse.<List<Application>>builder().data(applicationService.getApplications()).build();
    }

    @GetMapping("/api/applications/{applicationId}")
    public WebResponse<Application> getApplicationById(@PathVariable("applicationId") Long applicationId) {
        return WebResponse.<Application>builder().data(applicationService.getApplicationById(applicationId)).build();
    }

    @PutMapping("/api/applications/{applicationId}")
    public WebResponse<Application> updateApplication(@PathVariable("applicationId") Long applicationId,
            @RequestBody @Valid ApplicationRequest req) {
        return WebResponse.<Application>builder().data(applicationService.updateApplication(applicationId, req)).build();
    }

    @DeleteMapping("/api/applications/{applicationId}")
    public WebResponse<String> deleteApplication(@PathVariable("applicationId") Long applicationId) {
        return WebResponse.<String>builder().data(applicationService.deleteApplication(applicationId)).build();
    }
}
