package farizrifkyb.mini_cmdb.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import farizrifkyb.mini_cmdb.model.request.ApplicationRequest;
import farizrifkyb.mini_cmdb.model.response.ApplicationResponse;
import farizrifkyb.mini_cmdb.model.response.ApplicationSimpleResponse;
import farizrifkyb.mini_cmdb.model.response.WebResponse;
import farizrifkyb.mini_cmdb.service.ApplicationService;
import jakarta.validation.Valid;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class ApplicationController {

    private final ApplicationService applicationService;

    @PostMapping("/api/applications")
    public WebResponse<ApplicationSimpleResponse> createApplication(@RequestBody @Valid ApplicationRequest req) {
        return WebResponse.<ApplicationSimpleResponse>builder().data(applicationService.createApplication(req)).build();
    }

    @GetMapping("/api/applications")
    public WebResponse<List<ApplicationResponse>> getApplications() {
        return WebResponse.<List<ApplicationResponse>>builder().data(applicationService.getApplications()).build();
    }

    @GetMapping("/api/applications/{applicationId}")
    public WebResponse<ApplicationResponse> getApplicationById(@PathVariable Long applicationId) {
        return WebResponse.<ApplicationResponse>builder().data(applicationService.getApplicationById(applicationId))
                .build();
    }

    @PutMapping("/api/applications/{applicationId}")
    public WebResponse<ApplicationSimpleResponse> updateApplication(@PathVariable Long applicationId,
            @RequestBody @Valid ApplicationRequest req) {
        return WebResponse.<ApplicationSimpleResponse>builder()
                .data(applicationService.updateApplication(applicationId, req)).build();
    }

    @DeleteMapping("/api/applications/{applicationId}")
    public WebResponse<String> deleteApplication(@PathVariable Long applicationId) {
        return WebResponse.<String>builder().data(applicationService.deleteApplication(applicationId)).build();
    }
}
