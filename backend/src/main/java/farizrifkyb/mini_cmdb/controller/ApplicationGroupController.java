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

import farizrifkyb.mini_cmdb.entity.ApplicationGroup;
import farizrifkyb.mini_cmdb.model.request.ApplicationGroupRequest;
import farizrifkyb.mini_cmdb.model.response.ApplicationGroupResponse;
import farizrifkyb.mini_cmdb.model.response.WebResponse;
import farizrifkyb.mini_cmdb.service.ApplicationGroupService;
import jakarta.validation.Valid;

@RestController
public class ApplicationGroupController {

    private final ApplicationGroupService applicationGroupService;

    public ApplicationGroupController(ApplicationGroupService applicationGroupService) {
        this.applicationGroupService = applicationGroupService;
    }

    @PostMapping(path = "/api/applications/{application_id}/groups", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public WebResponse<ApplicationGroup> createApplicationGroup(@PathVariable("application_id") Long applicationId, @RequestBody @Valid ApplicationGroupRequest req) {
        ApplicationGroup newApplicationGroup = applicationGroupService.createApplicationGroup(applicationId, req);
        return WebResponse.<ApplicationGroup>builder().data(newApplicationGroup).build();
    }

    @GetMapping(path = "/api/groups", produces = MediaType.APPLICATION_JSON_VALUE)
    public WebResponse<List<ApplicationGroupResponse>> getApplicationGroups() {
        List<ApplicationGroupResponse> listApplicationGroups = applicationGroupService.getApplicationGroups();
        return WebResponse.<List<ApplicationGroupResponse>>builder().data(listApplicationGroups).build();
    }

    @GetMapping(path = "/api/applications/groups/{group_id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public WebResponse<ApplicationGroupResponse> getApplicationGroupById(@PathVariable("group_id") Long groupId) {
        ApplicationGroupResponse applicationGroup = applicationGroupService.getApplicationGroupById(groupId);
        return WebResponse.<ApplicationGroupResponse>builder().data(applicationGroup).build();
    }

    @PutMapping(path = "/api/applications/groups/{group_id}", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public WebResponse<ApplicationGroupResponse> updateApplicationGroup(@PathVariable("group_id") Long groupId, @RequestBody @Valid ApplicationGroupRequest req) {
        ApplicationGroupResponse updatedApplicationGroup = applicationGroupService.updateApplicationGroup(groupId, req);
        return WebResponse.<ApplicationGroupResponse>builder().data(updatedApplicationGroup).build();
    }

    @DeleteMapping(path = "/api/applications/groups/{group_id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public WebResponse<String> deleteApplication(@PathVariable("group_id") Long groupId) {
        String response = applicationGroupService.deleteApplicationGroup(groupId);
        return WebResponse.<String>builder().data(response).build();
    }
}
